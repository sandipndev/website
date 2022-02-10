import type { NextPage } from 'next'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import Card from './Card'
import type { SpotifyActivity } from '../pages/api/spotify/activity'

import spotifyLogo from '../assets/images/spotify-logo.png'
import { FaPause, FaPlay } from 'react-icons/fa'

const msToHMS = (ms: number) => {
  let seconds = ms / 1000;
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (hours !== 0) return String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')
  else return String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')
}

const sanitizePercent = (p: number, d: number) => {
  const percent = 98 * p / d;
  if (percent > 98) return 98
  else return percent
}

const SpotifyCard: NextPage = () => {
  const [activity, setActivity] = useState<SpotifyActivity & { called_at: number } | null | "loading">("loading");

  const getActivity = useCallback(async () => {
    try {
      const d = await fetch("/api/spotify/activity")
      const r = await d.json()
      setActivity({ ...r, called_at: Date.now() })
    } catch {
      setActivity(null)
    }
  }, [setActivity])

  const smoothPlayhead = useCallback(() => {
    setActivity((a: any) => {
      if (a !== "loading" && a && a.is_playing) return { ...a, progress_ms: a.progress_ms > a.duration ? a.progress_ms : a.progress_ms + (Date.now() - a.called_at) / 30 }
      return a;
    })
  }, [])

  useEffect(() => {
    getActivity()
    const t1 = setInterval(() => getActivity(), 5000);
    const t2 = setInterval(() => smoothPlayhead(), 100);
    return () => { clearInterval(t1); clearInterval(t2); }
  }, [getActivity, smoothPlayhead])

  return (
    <Card outerClassName={`bg-spotify bg-blend-color-dodge w-[28rem] h-24 rotate-1 hover:scale-105 hover:rotate-2 transition-gpu ease-in-out duration-300 delay-50 ${(activity === "loading" || !activity) ? "opacity-80" : "opacity-100"}`}>
      {activity && activity !== "loading" ? (
        <div className="flex items-center justify-between">
          <div className="relative basis-3/4 max-w-[21rem] pl-4 pr-2">
            <div className="flex justify-between">
              <div className="max-w-[18rem]">
                <div className="font-bold text-lg truncate text-white">{activity.track_name}</div>
                <div className="font-light text-xs truncate text-white">{activity.track_authors}</div>
              </div>
              <div className="mt-1 ml-2 min-w-[2rem] max-w-[2rem]">
                <Image className="invert rounded-full" src={spotifyLogo} alt="spotify logo" />
              </div>
            </div>
            <div className="relative -ml-4 mt-4 w-[22rem]">
              <hr className="border-spotify" />
              <div className="absolute w-2 h-2 bg-green-300 rounded-full -top-1" style={{ left: sanitizePercent(activity.progress_ms, activity.duration) + "%" }}></div>
            </div>
            <div className="flex justify-between">
              <div className="text-xs font-mono mt-2 text-opacity-80 text-white">{msToHMS(activity.progress_ms)} / {msToHMS(activity.duration)}</div>
              <div className="text-xs mt-2 text-opacity-80 text-spotify">on {activity.device}</div>
            </div>
          </div>
          <div className="w-24 cursor-pointer relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="shadow" src={activity.album_cover_image} alt="album cover" />
            <a href={activity.url} className="flex absolute top-0 bg-black bg-opacity-50 items-center justify-center w-full h-full">
              <div className="text-spotify font-extrabold text-xl">
                {activity.is_playing ? <FaPlay /> : <FaPause />}
              </div>
            </a>
          </div>
        </div>) : (
        <div className="text-white flex justify-center items-center h-24">Spotify isn&apos;t playing right now</div>
      )}
    </Card>
  )
}

export default SpotifyCard
