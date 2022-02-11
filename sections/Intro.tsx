import type { NextPage } from 'next'

import Header from '../components/Header'
import Background from '../components/backgrounds/IntroBg'
import MainCard from '../components/MainCard'
import SpotifyCard from '../components/SpotifyCard'
import TwitterCard from '../components/TwitterCard'

const Intro: NextPage = () => {
  return (
    <div className="relative h-screen flex justify-center overflow-hidden">
      <Background />
      <Header />
      <div className="flex flex-row space-x-20 h-screen justify-center items-center">
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
