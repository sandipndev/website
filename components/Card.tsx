import type { NextPage } from 'next'

interface PageProps {
  className?: string
}

const Card: NextPage<PageProps> = ({ children, className }) => {
  return <div className={"backdrop-blur-sm bg-white/10 " + className}>{children}</div>
}

export default Card
