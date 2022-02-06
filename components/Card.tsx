import type { NextPage } from 'next'
import { ReactNode } from 'react'

interface PageProps {
  outerClassName?: string;
  className?: string
  absBackgroundFills?: ReactNode[]
  footer?: ReactNode
}

const Card: NextPage<PageProps> = ({
  children,
  outerClassName = "",
  className = "",
  absBackgroundFills = [],
  footer = <></>
}) => {
  return (
    <div className={"relative overflow-hidden rounded-3xl " + outerClassName}>
      {absBackgroundFills.map(node => node)}
      <div className={"backdrop-blur-sm bg-card " + className}>
        {children}
      </div>
      {footer && <div className="bg-links p-6 px-10 flex items-center space-x-5 text-white text-3xl">
        {footer}
      </div>}
    </div>
  );
}

export default Card