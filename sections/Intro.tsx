import type { NextPage } from 'next'

import Background from '../components/backgrounds/IntroBg'
import MainCard from '../components/MainCard'
import SpotifyCard from '../components/SpotifyCard'

const Intro: NextPage = () => {
  return (
    <div className="relative h-screen flex justify-center overflow-hidden">
      <Background />
      <div className="flex flex-row space-x-20 h-screen justify-center items-center">
        <MainCard />
        <div className="flex flex-col space-y-40">
          <SpotifyCard />
        </div>
      </div>
    </div>
  )
}

export default Intro
