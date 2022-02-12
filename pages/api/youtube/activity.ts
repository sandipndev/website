import type { NextApiRequest, NextApiResponse } from "next";

import Redis from "ioredis";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const redis = new Redis(process.env.REDIS_URL as string);
  res.json(await redis.get("youtube-activity"));
  redis.disconnect();
};

export default handler;
