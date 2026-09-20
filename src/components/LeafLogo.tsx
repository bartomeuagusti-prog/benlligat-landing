type Props = {
  size?: number
  className?: string
  variant?: 'dark' | 'light'
}

export function LeafLogo({ size = 36, className = '', variant = 'dark' }: Props) {
  const bg = variant === 'dark' ? '#1A3D2F' : '#A8E08C'
  const stroke = variant === 'dark' ? '#E8F5E0' : '#1A3D2F'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="36" height="36" rx="9" fill={bg} />
      <path
        d="M18 8.5c0 0-7 4.5-7 12.5 0 3.866 3.134 7 7 7s7-3.134 7-7c0-8-7-12.5-7-12.5z"
        stroke={stroke}
        strokeWidth="1.7"
        fill="none"
      />
      <path
        d="M18 15.5v12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 19.5c-2.2 1.2-3.5 3-3.8 5"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}
