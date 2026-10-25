type IconProps = {
  size?: number
  strokeWidth?: number
  className?: string
}

const base = (size: number, strokeWidth: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: 'false' as const,
})

export function IconUser({ size = 15, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M20 21v-1.6A4.4 4.4 0 0 0 15.6 15H8.4A4.4 4.4 0 0 0 4 19.4V21" />
      <circle cx="12" cy="7.5" r="3.8" />
    </svg>
  )
}

export function IconLock({ size = 15, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <rect x="4.2" y="10.4" width="15.6" height="10.4" rx="1.4" />
      <path d="M8.1 10.4V7.6a3.9 3.9 0 0 1 7.8 0v2.8" />
    </svg>
  )
}

export function IconEye({ size = 15, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M2.6 12S6 5.9 12 5.9 21.4 12 21.4 12 18 18.1 12 18.1 2.6 12 2.6 12Z" />
      <circle cx="12" cy="12" r="2.9" />
    </svg>
  )
}

export function IconEyeOff({ size = 15, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M9.9 5.2A9.6 9.6 0 0 1 12 5c6 0 9.4 7 9.4 7a16 16 0 0 1-2.6 3.4" />
      <path d="M6.3 6.9A16.4 16.4 0 0 0 2.6 12S6 19 12 19a9.3 9.3 0 0 0 3.7-.8" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2M3.4 3.4l17.2 17.2" />
    </svg>
  )
}

export function IconClose({ size = 14, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconCheck({ size = 14, strokeWidth = 2.6, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M4.5 12.5 9.4 17.4 19.5 6.6" />
    </svg>
  )
}

export function IconAlert({ size = 12, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6v5.2M12 16.3h.01" />
    </svg>
  )
}

export function IconArrow({ size = 14, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
    </svg>
  )
}

export function IconInfo({ size = 12, strokeWidth = 1.9, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.4M12 7.9h.01" />
    </svg>
  )
}
