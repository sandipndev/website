import type { NextPage } from 'next'
import { ReactNode } from 'react'

interface PageProps {
  outerClassName?: string;
  className?: string
  absBackgroundFills?: ReactNode[]
  footer?: ReactNode
  absoluteElements?: ReactNode[]
}

const Card: NextPage<PageProps> = ({
  children,
  outerClassName = "",
  className = "",
  absBackgroundFills = [],
  absoluteElements = [],
  footer = undefined,
}) => {
  return (
    <div className={"relative rounded-3xl shadow " + outerClassName}>
      {absoluteElements.map(node => node)}
      <div className={"relative overflow-hidden rounded-3xl shadow"}>
        {absBackgroundFills.map(node => node)}
        {/* FIXME: backdrop-blur-sm was removed because hardware and compliance */}
        <div className={className}>
          {children}
        </div>
        {footer && <div className="bg-links p-6 px-10 flex items-center space-x-5 text-white text-3xl">
          {footer}
        </div>}
      </div>
    </div>
  );
}

export default Card
