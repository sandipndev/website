import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface TwitterActivity {
  id: string;
  text: string;
  profile_url: string;
}

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse<TwitterActivity>
) => {
  const {
    data: { data: lastTweets },
  } = await axios.get(
    `https://api.twitter.com/2/users/${process.env.TWITTER_USER_ID}/tweets?max_results=5`,
    { headers: { authorization: "Bearer " + process.env.TWITTER_BEARER_TOKEN } }
  );

  res.json({
    ...lastTweets[0],
    profile_url: process.env.TWITTER_USER_PHOTO_URL,
  });
};

export default handler;
