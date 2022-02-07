import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

import Card from './Card'

interface SpotifyActivity {
  progress_ms: number
  item: {
    name: string
    artists: {
      name: string
    }[]
    preview_url: string
    external_urls: {
      spotify: string
    }
    duration_ms: number
  }
  currently_playing_type: "track" | "episode"
  is_playing: boolean
}

const SpotifyCard: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [activity, setActivity] = useState<SpotifyActivity | null>(null);

  const getActivity = useCallback(async () => {
    const r = await fetch("/api/spotify/activity").then(r => r.json())

    if (r
      && Object.keys(r).length === 0
      && Object.getPrototypeOf(r) === Object.prototype) {
      setActivity(null)
    } else setActivity(r)

    setLoading(false)

  }, [setActivity, setLoading])

  useEffect(() => {
    const t = setInterval(() => getActivity(), 5000);
    return () => clearInterval(t)
  }, [getActivity])

  return (
    <Card outerClassName="bg-spotify w-[28rem] h-24 hover:scale-105 transition-gpu ease-in-out duration-300 delay-50">
      {!loading && activity?.item.name}
    </Card>
  )
}

export default SpotifyCard
