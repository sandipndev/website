import type { NextPage } from 'next'
import Image from 'next/image'

import bg4 from "../assets/images/bg-4.png"

import sling from "../assets/images/sling.svg"
import jupyter from "../assets/images/jupyter.svg"

const Outro: NextPage = () => {
  return <>
    <div className="relative h-screen overflow-hidden">
      <div className="relative h-4/5">
        <Image
          src={bg4}
          alt="Background"
          className="mix-blend-color-dodge"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="hidden sm:block absolute -right-20 top-1/4">
        <Image
          src={sling}
          alt="Sling"
        />
      </div>
      <div className="hidden sm:block absolute opacity-50 sm:opacity-100 right-1/4 top-1/4">
        <Image
          src={jupyter}
          alt="Jupyter"
        />
      </div>
      <div className="hidden sm:block absolute w-1/12 -top-96 left-0 bg-grad-5"></div>
    </div>
  </>
}

export default Outro


