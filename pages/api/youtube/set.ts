import type { NextApiRequest, NextApiResponse } from "next";

import Redis from "ioredis";

export type YoutubeActivity = {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  videoUrl: string;
  videoTitle: string;
  channel: string;
  saveTime: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "OPTIONS") {
    res.status(200).send("OK");
    return;
  }

  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  }

  if (req.headers["authorization"] !== "Bearer simplePassword") {
    res.status(403).send({ message: "Incorrect password to make this change" });
    return;
  }

  const data = req.body;

  const redis = new Redis(process.env.REDIS_URL as string);
  await redis.set(
    "youtube-activity",
    JSON.stringify({ ...data, saveTime: Date.now() })
  );
  redis.disconnect();

  res.status(200).send("OK");
};

export default handler;
