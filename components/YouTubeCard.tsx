import ms from 'ms';
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react';
import { FaPause, FaPlay, FaYoutube } from 'react-icons/fa';

import { YoutubeActivity } from '../pages/api/youtube/set';

import Card from './Card'
import { msToHMS, sanitizePercent } from './SpotifyCard';

const YouTubeCard: NextPage = () => {
  const [activity, setActivity] = useState<YoutubeActivity & { initialTime: number; videoId: string } | "loading">("loading");

  const getActivity = useCallback(async () => {
    const activity: YoutubeActivity = await fetch("https://sandipan.dev/api/youtube/activity").then(r => r.json())
    const videoIdRegex = new RegExp(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi);
    const videoId: string = videoIdRegex.exec(activity.videoUrl)![1]
    setActivity({
      ...activity, initialTime:
        activity.currentTime,
      videoId,
    })
  }, [setActivity])

  const smoothPlayhead = useCallback(() => {
    setActivity((a: any) => {
      if (a !== "loading" && a && a.isPlaying)
        return {
          ...a,
          currentTime: (a.currentTime < a.duration) ? (a.initialTime + ((Date.now() - a.saveTime) / 1000)) + ms('10s') / 1000 : a.currentTime
        }
      return a;
    })
  }, [setActivity])

  useEffect(() => {
    getActivity();
    const t1 = setInterval(() => getActivity(), ms('10s'));
    const t2 = setInterval(() => smoothPlayhead(), 50);
    return () => { clearInterval(t1); clearInterval(t2) }
  }, [getActivity, smoothPlayhead])

  if (!activity || activity === "loading") return <></>

  return (
    <Card
      props={{
        initial: { rotate: 1 },
        whileHover: { scale: 1.01, rotate: 1 },
        whileTap: { scale: 0.90, rotate: 0 }
      }}
      absoluteElements={[
        <div key="1" className="absolute top-4 -right-8 bg-youtube p-2 rounded-r-lg">
          <FaYoutube className="text-white" />
        </div>,
        activity && activity.isPlaying ? [
          <div key={1} className="absolute bg-youtube text-white font-bold px-2 pr-3 py-1 -top-6 right-8 rounded-t-md text-xs flex space-x-2 justify-center items-center">
            <FaYoutube />
            <span>Listening to</span>
          </div>,
        ] : []
      ]}
      outerClassName="bg-twitterBlack bg-blend-color-dodge w-[28rem] h-24 transition-gpu ease-in-out duration-300 delay-50 opacity-80">

      <div className="flex items-center justify-between h-24">
        <div className="w-24 cursor-pointer relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="shadow" src={
            `https://img.youtube.com/vi/${activity.videoId}/sddefault.jpg`
          } alt="album cover" />
          <a href={activity.videoUrl} className="flex absolute top-0 bg-black bg-opacity-50 items-center justify-center w-full h-full">
            <div className="text-youtube font-extrabold text-xl">
              {activity.isPlaying ? <FaPause /> : <FaPlay />}
            </div>
          </a>
        </div>
        <div className="relative basis-3/4 max-w-[21rem] pr-4 pl-1">
          <div className="flex justify-between -mt-1">
            <div className="max-w-[18rem]">
              <div className="font-bold text-lg truncate text-white">{activity.videoTitle}</div>
              <div className="font-light text-xs truncate text-white">{activity.channel}</div>
            </div>
          </div>
          <div className="pl-2 relative -ml-5 mt-3 w-[21rem]">
            <hr className="border-youtube" />
            <div className="absolute w-2 h-2 bg-red-300 rounded-full -top-1" style={{ left: sanitizePercent(activity.currentTime, activity.duration, 100) + "%" }}></div>
          </div>
          <div className="flex justify-between">
            <div className="text-xs font-mono mt-2 text-opacity-80 text-white">{msToHMS(activity.currentTime * 1000)} / {msToHMS(activity.duration * 1000)}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default YouTubeCard
