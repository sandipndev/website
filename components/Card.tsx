import { HTMLMotionProps, motion } from 'framer-motion';
import type { NextPage } from 'next'
import { ReactNode } from 'react'

interface PageProps {
  outerClassName?: string;
  className?: string
  absBackgroundFills?: ReactNode[]
  footer?: ReactNode
  absoluteElements?: ReactNode[]
  props?: HTMLMotionProps<"div">
}

const Card: NextPage<PageProps> = ({
  children,
  outerClassName = "",
  className = "",
  absBackgroundFills = [],
  absoluteElements = [],
  footer = undefined,
  props = []
}) => {
  return (
    <motion.div
      {...props}
      className={"relative rounded-3xl shadow " + outerClassName}
    >
      {absoluteElements.map(node => node)}
      <div className={"relative overflow-hidden rounded-3xl shadow"}>
        {absBackgroundFills.map(node => node)}
        {/* FIXME: backdrop-blur-sm was removed because hardware and compliance */}
        <div className={className}>
          {children}
        </div>
        {footer && <div className="bg-links p-6 sm:px-10 flex items-center space-x-4 sm:space-x-5 text-white">
          {footer}
        </div>}
      </div>
    </motion.div>
  );
}

export default Card
