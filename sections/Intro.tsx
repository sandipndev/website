import type { NextPage } from 'next'
import Image from 'next/image'

import bg1 from "../assets/images/bg-1.png"

import sling from "../assets/images/sling.svg"
import jupyter from "../assets/images/jupyter.svg"
import wheel from "../assets/images/wheel.png"
import Card from '../components/Card'

const Intro: NextPage = () => {
  return <>
    <div className="relative h-screen overflow-hidden">
      {/* Content */}
      <>
        <div className="w-1/2 text-white">
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam nemo, voluptatum asperiores quos quaerat! Cupiditate nemo perspiciatis et commodi culpa? Quia reiciendis sapiente, tempora laborum error doloremque quidem necessitatibus?
          </Card>
        </div>
      </>

      {/* Backgrounds */}
      <>
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
    </div>
  </>
}

export default Intro
