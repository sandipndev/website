import type { NextPage } from 'next'
import Head from 'next/head'

import Intro from '../sections/Intro'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | @sandipndev</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="I, Sandipan Dey (@sandipndev), am a product developer based on the mempool. I engage in Bitcoin and have psychic powers with Typescript on Node.js. Learn development and lifestyle tactics on my Youtube Channel." />
        <meta name="og:title" content="Home | @sandipndev" />
        <meta name="og:url" content="https://sandipan.dev" />
        <meta name="og:description" content="I, Sandipan Dey (@sandipndev), am a product developer based on the mempool. I engage in Bitcoin and have psychic powers with Typescript on Node.js. Learn development and lifestyle tactics on my Youtube Channel." />
        <meta name="og:image" content="https://sandipan.dev/logo.png" />
      </Head>
      <div className="font-body select-none">
        <Intro />
      </div>
    </>
  )
}

export default Home
