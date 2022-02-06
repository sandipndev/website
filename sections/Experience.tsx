import type { NextPage } from 'next'
import Image from 'next/image'

import bg3 from "../assets/images/bg-3.png"

import sling from "../assets/images/sling.svg"
import jupyter from "../assets/images/jupyter.svg"

const Experience: NextPage = () => {
  return <>
    <div className="relative h-screen overflow-hidden">
      <Image
        src={bg3}
        alt="Background"
        className="mix-blend-color-dodge"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="hidden sm:block absolute -left-24 top-3/4">
        <Image
          src={sling}
          alt="Sling"
        />
      </div>
      <div className="hidden sm:block absolute opacity-50 sm:opacity-100 left-1/4 top-3/4">
        <Image
          src={jupyter}
          alt="Jupyter"
        />
      </div>
      <div className="hidden sm:block absolute w-1/12 bg-grad-3 right-0 -top-40"></div>
      <div className="hidden sm:block absolute w-1/12 bg-grad-4 -left-40 -top-96 ml-96"></div>
    </div>
  </>
}

export default Experience


