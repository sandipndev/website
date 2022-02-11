import type { NextPage } from 'next'
import { ReactNode } from 'react'

interface PageProps {
  icon: ReactNode;
  href: string;
  tooltipText: string;
  left?: number;
}

const Social: NextPage<PageProps> = ({
  icon,
  href,
  tooltipText,
  left = 40,
}) => {
  return (
    <a className="text-2xl sm:text-3xl transition ease-in-out duration-300 hover:scale-110 has-tooltip z-10" href={href} target="_blank" rel="noreferrer">
      <span
        className="tooltip bg-black font-mono text-xs bg-opacity-80 text-white rounded p-1 px-2 -mt-8"
        style={{ marginLeft: `-${left}px` }}
      >{tooltipText}</span>
      {icon}
    </a>
  );
}

export default Social
