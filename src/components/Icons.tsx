type IconProps = {
  className?: string
  size?: number
  strokeWidth?: number
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

export function IconUser({ size = 18, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M20 21v-1.6A4.4 4.4 0 0 0 15.6 15H8.4A4.4 4.4 0 0 0 4 19.4V21" />
      <circle cx="12" cy="7.5" r="3.8" />
    </svg>
  )
}

export function IconLock({ size = 18, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <rect x="4.2" y="10.4" width="15.6" height="10.4" rx="2.6" />
      <path d="M8.1 10.4V7.6a3.9 3.9 0 0 1 7.8 0v2.8" />
      <path d="M12 14.6v2.2" />
    </svg>
  )
}

export function IconEye({ size = 17, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M2.6 12S6 5.9 12 5.9 21.4 12 21.4 12 18 18.1 12 18.1 2.6 12 2.6 12Z" />
      <circle cx="12" cy="12" r="2.9" />
    </svg>
  )
}

export function IconEyeOff({ size = 17, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M9.9 5.2A9.6 9.6 0 0 1 12 5c6 0 9.4 7 9.4 7a16 16 0 0 1-2.6 3.4" />
      <path d="M6.3 6.9A16.4 16.4 0 0 0 2.6 12S6 19 12 19a9.3 9.3 0 0 0 3.7-.8" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      <path d="M3.4 3.4 20.6 20.6" />
    </svg>
  )
}

export function IconClose({ size = 16, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconCheck({ size = 16, strokeWidth = 2.4, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M4.5 12.5 9.4 17.4 19.5 6.6" />
    </svg>
  )
}

export function IconAlert({ size = 13, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6v5.2M12 16.3h.01" />
    </svg>
  )
}

export function IconArrowRight({ size = 17, strokeWidth = 2, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
    </svg>
  )
}

export function IconCalendar({ size = 12, strokeWidth = 1.9, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2.6" />
      <path d="M3.4 10h17.2M8.4 3.4v3.4M15.6 3.4v3.4" />
    </svg>
  )
}

export function IconChevronUp({ size = 18, strokeWidth = 2.2, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M5.5 14.5 12 8l6.5 6.5" />
    </svg>
  )
}

export function IconDrawer({ size = 16, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="M3 11.5h18" />
      <path d="M9.6 8.2h4.8M9.6 14.8h4.8" />
    </svg>
  )
}

export function IconShield({ size = 17, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 3.2 4.8 6v5.6c0 4.1 3 7.3 7.2 9.2 4.2-1.9 7.2-5.1 7.2-9.2V6Z" />
      <path d="M9 12.2l2.2 2.2 4-4.2" />
    </svg>
  )
}

export function IconSpark({ size = 14, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <path d="M12 3.4l1.9 4.9 4.9 1.9-4.9 1.9L12 17l-1.9-4.9L5.2 10.2l4.9-1.9Z" />
      <path d="M18.4 15.2l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
    </svg>
  )
}

export function IconInfo({ size = 14, strokeWidth = 1.9, className }: IconProps) {
  return (
    <svg {...base(size, strokeWidth)} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.4M12 7.9h.01" />
    </svg>
  )
}
