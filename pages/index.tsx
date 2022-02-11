import type { NextPage } from 'next'

import Intro from '../sections/Intro'

const Home: NextPage = () => {
  return (
    <div className="font-body select-none">
      <Intro />
    </div>
  )
}

export default Home
