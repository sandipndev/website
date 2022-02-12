import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import Header from '../components/Header'
import Background from '../components/backgrounds/IntroBg'
import MainCard from '../components/MainCard'
import SpotifyCard from '../components/SpotifyCard'
import TwitterCard from '../components/TwitterCard'
import YouTubeCard from '../components/YouTubeCard'

const Intro: NextPage = () => {
  return (
    <div className="relative sm:h-screen flex justify-center overflow-hidden">
      <Background />
      <Header />
      <div className="mt-40 sm:mt-0 flex flex-col space-y-12 mb-10 lg:flex-row lg:space-x-20 lg:h-screen justify-center items-center">
        <MainCard />
        <div className="flex flex-col items-center space-y-10 scale-75 sm:scale-100">
          <div className="text-white lowercase -mt-10 text-opacity-80">LATEST ACTIVITY</div>
          <SpotifyCard />
          <TwitterCard />
          <YouTubeCard />
        </div>
      </div>
    </div>
  )
}

export default Intro
