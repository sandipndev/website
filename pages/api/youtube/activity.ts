import type { NextApiRequest, NextApiResponse } from "next";
import Redis from "ioredis";

import { YoutubeActivity } from "./set";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const redis = new Redis(process.env.REDIS_URL as string);
  const activity: YoutubeActivity | "" = JSON.parse(
    (await redis.get("youtube-activity")) || ""
  );

  if (activity === "") res.json(null);
  else if (Date.now() - activity.saveTime > activity.duration * 1000)
    res.json(null);
  else res.json(activity);

  redis.disconnect();
};

export default handler;
