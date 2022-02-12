import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

import Redis from "ioredis";

import runMiddleware from "../../../helpers/runMiddleware";

export type YoutubeActivity = {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  videoUrl: string;
};

const cors = Cors({
  methods: ['POST'],
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }

  if (req.headers["Authorization"] !== "Bearer simplePassword") {
    res.status(403).send({ message: 'Incorrect password to make this change' })
    return
  }

  await runMiddleware(req, res, cors);

  const data = JSON.parse(req.body);

  const redis = new Redis(process.env.REDIS_URL as string);
  await redis.set("youtube-activity", JSON.stringify(data));
  redis.disconnect();

  res.status(200).send("OK");
};

export default handler;
