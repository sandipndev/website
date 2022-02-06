import type { NextPage } from 'next'
import Image from 'next/image'

import bg1 from "../assets/images/bg-1.png"

import sling from "../assets/images/sling.svg"
import jupyter from "../assets/images/jupyter.svg"
import wheel from "../assets/images/wheel.png"

import wink from '../assets/images/wink.png'
import wave from '../assets/images/wave.png'

import Card from '../components/Card'
import Spacer from '../components/Spacer'

const Backgrounds = () => <>
  <Image
    src={bg1}
    alt="Background"
    className="mix-blend-color-dodge"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  />
  <div className="hidden sm:block absolute -left-24 top-1/4">
    <Image
      src={sling}
      alt="Sling"
    />
  </div>
  <div className="absolute opacity-50 sm:opacity-100 left-10 top-3/4">
    <Image
      src={jupyter}
      alt="Jupyter"
    />
  </div>
  <div className="hidden sm:block absolute w-1/12 -top-40 right-1/4 bg-grad-1"></div>
  <div className="absolute hidden sm:block -right-36 h-96 w-96 sm:top-1/3">
    <Image
      src={wheel}
      alt="Wheel"
    />
  </div>
</>

const Intro: NextPage = () => {
  return <>
    <div className="relative h-screen overflow-hidden">
      <Backgrounds />

      {/* Content */}
      <div className="relative">

        <Card className="w-1/2 text-white rounded-xl p-4 flex flex-col space-y-2 relative">
          <div className="absolute right-4 w-40 h-40">
            <Image src={wink} alt="me, winking" />
          </div>
          <p className="pt-4 text-lg">Hi there!
            <span className="ml-2 h-12 w-12">
              <Image src={wave} alt="wave" />
            </span>
          </p>
          <h1 className="text-4xl font-bold">Sandipan Dey</h1>
          <h2 className="text-xl font-bold">Dreamer, Developer, Pragmatist</h2>
          <p className="text-md">
            <Spacer />
            Hello, my name is  Sandipan Dey and I’m a product manager. I love coming up with innovative project ideas and build them out using frameworks I know.
            <Spacer />
            I love working with new bleeding-edge technologies. Recently, I’m super excited about Blockchains and believe they are our future. If you have a cool project in your mind and want to pitch me the idea so that we can work on it together, hit me up!
            <Spacer />
            Mostly people find me on my computer chair. But if you couldn’t find me there, check out the social links below to connect.
            <Spacer />
            <span className="font-bold">PS.</span> Dope Potterhead, waiting for the Quill of Acceptance to drop me a letter.
            <br />
            <span className="font-bold">PPS.</span> Emails are the best forms of communication.
          </p>
        </Card>
      </div>
    </div>
  </>
}

export default Intro
