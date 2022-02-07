import type { NextPage } from 'next'
import Image from 'next/image'

import { FaTwitter, FaLinkedinIn, FaGithub, FaDiscord, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa"

import wink from '../assets/images/wink.png'
import wave from '../assets/images/wave.png'

import Card from '../components/Card'
import Spacer from '../components/Spacer'
import Social from '../components/Social'

const MainCard: NextPage = () => (
  <Card
    outerClassName="max-w-3xl -rotate-1 hover:rotate-0 hover:scale-105 transform-gpu transition delay-50 ease-in-out duration-300"
    className="bg-card text-white py-6 px-10 flex flex-col space-y-2 relative z-10"
    absBackgroundFills={[
      <div key={1} className="absolute bg-grad-6"></div>,
      <div key={2} className="absolute bg-grad-7"></div>
    ]}
    footer={
      <>
        <Social
          icon={<FaTwitter />}
          href="https://twitter.com/sandipndev"
          tooltipText="@sandipndev"
        />
        <Social
          icon={<FaGithub />}
          href="https://github.com/sandipndev"
          tooltipText="@sandipndev"
        />
        <Social
          icon={<FaLinkedinIn />}
          href="https://www.linkedin.com/in/sandipndev"
          tooltipText="@sandipndev"
        />
        <Social
          icon={<FaDiscord />}
          href="https://discord.com/users/Sandipan#6760"
          tooltipText="Sandipan#6760"
          left={44}
        />
        <Social
          icon={<FaInstagram />}
          href="https://www.instagram.com/sandipndev/"
          tooltipText="#sandipndev"
        />
        <Social
          icon={<FaYoutube />}
          href="https://www.youtube.com/channel/UCXhBtuTyK1S81BzQWILPywQ"
          tooltipText="sandipndev"
        />
        <Social
          icon={<FaEnvelope />}
          href="mailto:hey@sandipan.dev"
          left={55}
          tooltipText="hey@sandipan.dev"
        />
      </>
    }
  >
    <div className="absolute right-0 -top-2 w-40 sm:w-auto">
      <Image src={wink} alt="me, winking" />
    </div>
    <p className="pt-2 text-lg">Hi there!
      <span className="ml-2 inline-block animate-hi">
        <Image src={wave} height="20" width="20" alt="wave" />
      </span>
    </p>
    <h1 className="text-4xl font-bold">Sandipan Dey</h1>
    <h2 className="text-xl font-bold text-secondary">Dreamer, Developer, Pragmatist</h2>
    <p className="text-md">
      <Spacer />
      <div className="w-3/4">Hello, my name is  Sandipan Dey and I’m a product manager. I love coming up with innovative project ideas and build them out using frameworks I know.</div>
      <Spacer />
      I love working with new bleeding-edge technologies. Recently, I’m super excited about Blockchains and believe they are our future. If you have a cool project in your mind and want to pitch me the idea so that we can work on it together, hit me up!
      <Spacer />
      Mostly people find me on my computer chair. But if you couldn’t find me there, check out the social links below to connect.
      <Spacer />
      <span className="font-bold">PS.</span> Dope Potterhead, waiting for the Quill of Acceptance to drop me a letter.
      <br />
      <span className="font-bold">PPS.</span> Emails are the best forms of communication.
      <Spacer />
    </p>
  </Card>
);

export default MainCard;
