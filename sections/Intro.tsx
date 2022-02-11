import type { NextPage } from 'next'

import Header from '../components/Header'
import Background from '../components/backgrounds/IntroBg'
import MainCard from '../components/MainCard'
import SpotifyCard from '../components/SpotifyCard'
import TwitterCard from '../components/TwitterCard'

const Intro: NextPage = () => {
  return (
    <div className="relative sm:h-screen flex justify-center overflow-hidden">
      <Background />
      <Header />
      <div className="mt-40 sm:mt-0 flex flex-col sm:flex-row sm:space-x-20 sm:h-screen justify-center items-center">
        <MainCard />
        <div className="flex flex-col space-y-10">
          <SpotifyCard />
          <TwitterCard />
        </div>
      </div>
    </div>
  )
}

export default Intro
