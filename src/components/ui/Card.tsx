import type { HTMLAttributes } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement>

const Card = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-[#E5E7EB] bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
