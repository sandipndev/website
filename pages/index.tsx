import type { NextPage } from 'next'

import AbsoluteFragments from '../components/AbsoluteFragments'

import Intro from '../sections/Intro'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Outro from '../sections/Outro'

const Home: NextPage = () => {
  return (
    <div className="font-body select-none">
      <AbsoluteFragments />
      <Intro />
      <Projects />
      <Experience />
      <Outro />
    </div>
  )
}

export default Home
