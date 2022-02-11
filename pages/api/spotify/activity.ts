import type { NextApiRequest, NextApiResponse } from "next";

import SpotifyWebApi from "spotify-web-api-node";

import Redis from "ioredis";
import ms from "ms";

export type SpotifyActivity = {
  type: "track" | "episode" | "ad" | "unknown";
  track_name: string;
  track_authors: string;
  album_cover_image: string;
  progress_ms: number;
  duration: number;
  device: string;
  url: string;
  is_playing: boolean;
};

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse<SpotifyActivity | null>
) => {
  const redis = new Redis(process.env.REDIS_URL as string);

  const cachedActivityTime = await redis.get("spotify-lastCollected");
  let cachedActivity: SpotifyActivity;

  if (
    cachedActivityTime &&
    Date.now() - Number(cachedActivityTime) <= ms("5s") &&
    (cachedActivity = JSON.parse(
      (await redis.get("spotify-activity")) || "null"
    )) !== "null"
  )
    return res.json({
      ...cachedActivity,
      progress_ms:
        cachedActivity.progress_ms + Date.now() - Number(cachedActivityTime),
    });

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID as string,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN as string,
  });

  const {
    body: { access_token },
  } = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(access_token);

  const { body }: { body: any } = await spotifyApi.getMyCurrentPlayingTrack();
  const { body: devices } = await spotifyApi.getMyDevices();

  if (!body || !body.item || body.item.type !== "track")
    return res.status(200).json(null);

  const data: SpotifyActivity = {
    type: body.currently_playing_type,
    track_name: body.item.name,
    track_authors: body.item.artists
      .map((artist: { name: string }) => artist.name)
      .join(", "),
    album_cover_image: body.item.album.images[0].url,
    progress_ms: body.progress_ms,
    duration: body.item.duration_ms,
    device: devices.devices.filter((device) => device.is_active)[0].name,
    url: body.item.external_urls.spotify,
    is_playing: body.is_playing,
  };

  await redis.set("spotify-lastCollected", JSON.stringify(Date.now()));
  await redis.set("spotify-activity", JSON.stringify(data));
  res.status(200).json(data);
};

export default handler;
