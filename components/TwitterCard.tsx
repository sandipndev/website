import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';

import type { TwitterActivity } from '../pages/api/twitter/activity';

import Card from './Card'

const TwitterCard: NextPage = () => {
  const [activity, setActivity] = useState<TwitterActivity | "loading">("loading");

  const getActivity = useCallback(async () => {
    const activity: TwitterActivity = await fetch("/api/twitter/activity").then(r => r.json())
    setActivity(activity)
  }, [setActivity])

  useEffect(() => {
    getActivity();
  }, [getActivity])

  return (
    <Card
      props={{
        whileHover: { scale: 1.01, rotate: 1 },
        whileTap: { scale: 0.90, rotate: 0 }
      }}
      absoluteElements={[
        <div key="1" className="absolute top-2 -left-4 bg-twitter p-2 rounded-l-lg">
          <FaTwitter className="text-white" />
        </div>
      ]}
      outerClassName="bg-twitterBlack bg-blend-color-dodge w-[28rem] h-24 transition-gpu ease-in-out duration-300 delay-50 opacity-80">
      {!activity || activity === "loading" ?
        <div className="text-white flex justify-center items-center h-24">Can&apos;t connect to Twitter right now</div>
        :
        <div className="text-white flex flex-col space-y-1 justify-center items-center h-24">
          <div className="font-bold text-sm max-w-[24rem]">{activity.text}</div>
          <div className="relative self-start px-8 flex items-center w-full">
            <div className="text-xs font-bold text-twitter">Latest thoughts on Twitter from @sandipndev</div>
            <a target="_blank" rel="noreferrer" href={"https://twitter.com/sandipndev/status/" + activity.id} className="absolute right-4 px-2 font-bold text-xs rounded-full bg-twitter">
              Open in Twitter
            </a>
          </div>
        </div>}
    </Card>
  );
}

export default TwitterCard
