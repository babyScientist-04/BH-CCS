import type { HTMLAttributes } from 'react'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

const Badge = ({ className = '', children, ...props }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-2 py-0.5 text-[10px] font-medium text-[#374151] ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
