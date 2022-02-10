import type { NextPage } from 'next'

import Intro from '../sections/Intro'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Outro from '../sections/Outro'
import ReactPageScroller from 'react-page-scroller'

const Home: NextPage = () => {
  return (
    <div className="font-body select-none">
      <ReactPageScroller>
        <Intro />
        <Projects />
        <Experience />
        <Outro />
      </ReactPageScroller>
    </div>
  )
}

export default Home
