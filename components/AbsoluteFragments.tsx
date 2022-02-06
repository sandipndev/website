import type { NextPage } from 'next'
import Image from 'next/image'

import wheel from '../assets/images/wheel.png'

const AbsoluteFragments: NextPage = () => {
  return <>
    <div className="sm:hidden absolute mt-24 w-screen h-screen overflow-hidden opacity-60">
      <div className="absolute bottom-0 -right-24 h-64 w-64">
        <Image
          src={wheel}
          alt="Wheel"
        />
      </div>
    </div></>
}

export default AbsoluteFragments
