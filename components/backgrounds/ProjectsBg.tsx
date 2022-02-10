import Image from 'next/image'

import bg2 from "../../assets/images/bg-2.jpg"

import sling from "../../assets/images/sling.svg"
import uranus from "../../assets/images/uranus.png"

const IntroBg = () => <>
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
</>

export default IntroBg
