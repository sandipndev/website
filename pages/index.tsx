import type { NextPage } from 'next'
import Image from 'next/image'

import bg1 from "../assets/images/bg-1.png"
import bg2 from "../assets/images/bg-2.png"
import bg3 from "../assets/images/bg-3.png"
import bg4 from "../assets/images/bg-4.png"

import sling from "../assets/images/sling.svg"
import jupyter from "../assets/images/jupyter.svg"
import wheel from "../assets/images/wheel.png"
import uranus from "../assets/images/uranus.png"

const Home: NextPage = () => {
  return (
    <>
      <div className="sm:hidden absolute mt-24 w-screen h-screen overflow-hidden opacity-60">
        <div className="absolute bottom-0 -right-24 h-64 w-64">
          <Image
            src={wheel}
            alt="Wheel"
          />
        </div>
      </div>
      <div className="relative h-screen overflow-hidden">
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
        {/* <div className="absolute hidden sm:block -right-36 h-96 w-96 sm:top-1/3">
          <Image
            src={wheel}
            alt="Wheel"
          />
        </div> */}
      </div>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={bg2}
          alt="Background"
          className="mix-blend-color-dodge"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="hidden sm:block absolute -left-24 top-1/3">
          <Image
            src={sling}
            alt="Sling"
          />
        </div>
        <div className="hidden sm:block absolute w-2/12 -top-40 right-1/4 bg-grad-2"></div>
        <div className="absolute w-44 sm:w-80 top-0 right-8 sm:top-1/3">
          <Image
            src={uranus}
            alt="Uranus"
          />
        </div>
      </div>
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
  )
}

export default Home
