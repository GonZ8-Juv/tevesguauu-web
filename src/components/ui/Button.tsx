import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp'
type ButtonSize = 'sm' | 'md' | 'lg'

type BaseButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type LinkButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonProps = LinkButtonProps | NativeButtonProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#E85A93] text-white shadow-[0_12px_28px_rgba(232,90,147,0.18)] hover:bg-[#D94A7F]',
  secondary:
    'bg-[#F7AFC5] text-[#2B2B2B] shadow-[0_12px_28px_rgba(247,175,197,0.2)] hover:bg-[#E85A93] hover:text-white',
  outline:
    'border border-[#E85A93] bg-white text-[#E85A93] hover:bg-[#FFF8FA] hover:text-[#D94A7F]',
  whatsapp:
    'bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.18)] hover:bg-[#1EBE5D]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '', href, ...rest } = props
  const classes = [
    'inline-flex items-center justify-center rounded-[20px] font-bold',
    'transition duration-200 ease-out hover:scale-[1.02]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E85A93]',
    'disabled:pointer-events-none disabled:opacity-60',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export default Button
