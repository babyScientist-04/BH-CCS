import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'ghost' | 'tab'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  active?: boolean
  icon?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  ghost:
    'inline-flex items-center justify-center rounded-md border border-[#E5E7EB] bg-white text-[#6B7280] transition hover:text-[#111827]',
  tab: 'relative inline-flex items-center px-1 pb-3 text-[16px] text-[#9CA3AF] transition',
}

const Button = ({
  variant = 'ghost',
  active = false,
  icon,
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const activeTabStyles = active && variant === 'tab' ? 'text-[#111827] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#111827]' : ''

  return (
    <button
      className={`${variantStyles[variant]} ${activeTabStyles} ${className}`}
      {...props}
    >
      {icon ?? children}
    </button>
  )
}

export default Button
