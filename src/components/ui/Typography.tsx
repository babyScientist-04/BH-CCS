import type { HTMLAttributes, ReactNode } from 'react'

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode
}

export const Heading = ({ className = '', children }: TextProps) => (
  <p className={`text-[36px] font-medium leading-tight text-[#111827] ${className}`}>
    {children}
  </p>
)

export const Body = ({ className = '', children }: TextProps) => (
  <p className={`text-[16px] text-[#111827] ${className}`}>{children}</p>
)

export const Meta = ({ className = '', children }: TextProps) => (
  <p
    className={`text-[12px] font-medium uppercase tracking-[0.03em] text-[#9CA3AF] ${className}`}
  >
    {children}
  </p>
)
