import SpotifyWebApi from "spotify-web-api-node";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID as string,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN as string,
  });

  const {
    body: { access_token },
  } = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(access_token);

  const { body } = await spotifyApi.getMyCurrentPlayingTrack();

  res.status(200).json(body);
};

export default handler;
