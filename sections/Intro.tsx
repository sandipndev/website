import type { NextPage } from 'next'

import Background from '../components/backgrounds/IntroBg'
import MainCard from '../components/MainCard'

const Intro: NextPage = () => {
  return <>
    <div className="relative h-screen overflow-hidden">
      <Background />
      <MainCard />
    </div>
  </>
}

export default Intro
