import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import Redis from "ioredis";
import ms from "ms";

export type TwitterActivity = {
  id: string;
  text: string;
  profile_url: string;
};

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse<TwitterActivity | null>
) => {
  const redis = new Redis(process.env.REDIS_URL as string);

  const cachedActivityTime = await redis.get("twitter-lastCollected");
  let cachedActivity: TwitterActivity | null;

  if (
    cachedActivityTime &&
    Date.now() - Number(cachedActivityTime) <= ms("30s") &&
    (cachedActivity = JSON.parse(
      (await redis.get("twitter-activity")) || "null"
    )) !== "null"
  ) {
    redis.disconnect();
    return res.json(cachedActivity);
  }

  const {
    data: { data: lastTweets },
  } = await axios.get(
    `https://api.twitter.com/2/users/${process.env.TWITTER_USER_ID}/tweets?max_results=5`,
    { headers: { authorization: "Bearer " + process.env.TWITTER_BEARER_TOKEN } }
  );

  const data = {
    ...lastTweets[0],
    profile_url: process.env.TWITTER_USER_PHOTO_URL,
  };

  await redis.set("twitter-lastCollected", JSON.stringify(Date.now()));
  await redis.set("twitter-activity", JSON.stringify(data));
  redis.disconnect();
  res.json(data);
};

export default handler;
