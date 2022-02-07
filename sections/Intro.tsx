import type { NextPage } from 'next'

import Background from '../components/backgrounds/IntroBg'
import MainCard from '../components/MainCard'

const Intro: NextPage = () => {
  return (
    <div className="relative h-screen flex justify-center overflow-hidden">
      <Background />
      <div className="flex flex-row space-x-20 h-screen justify-center items-center">
        <MainCard />
      </div>
    </div>
  )
}

export default Intro
