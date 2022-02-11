import type { NextPage } from 'next'
import Image from 'next/image'

import logo from "../assets/images/logo.png"

const Header: NextPage = () => {
  return <div className="absolute w-screen flex flex-row justify-between items-center mt-8 max-w-6xl">
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a href="/" className="cursor-pointer">
      <Image src={logo} alt="logo" />
    </a>
    <div className="flex space-x-8 justify-center items-center">
      <a href="https://blog.sandipan.dev" target="_blank" rel="noreferrer"
        className="text-white font-medium text-xl lowercase hover:underline hover:underline-offset-8">Blog</a>
      <a href="/resume.pdf" target="_blank" rel="noreferrer"
        className="bg-tango hover:bg-white hover:text-black transition ease-out duration-300 shadow text-white font-bold text-xl p-3 py-1 lowercase rounded-xl">Resume</a>
    </div>
  </div>
}

export default Header
