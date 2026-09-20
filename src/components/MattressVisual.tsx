/** Isometric-style mattress cutaway in SVG/CSS — no 3D asset required */
export function MattressVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-lg ${className}`} aria-hidden>
      <div className="pointer-events-none absolute inset-x-8 bottom-2 h-8 rounded-[100%] bg-forest/10 blur-xl" />
      <svg viewBox="0 0 520 340" className="relative w-full drop-shadow-xl" role="img">
        <title>Tall transversal d'un matalàs</title>
        {/* Base casing */}
        <path
          d="M48 248 L260 300 L472 248 L472 278 L260 340 L48 278 Z"
          fill="#2a3238"
        />
        <path
          d="M48 248 L260 300 L472 248 L260 210 Z"
          fill="#3a434a"
        />
        {/* Lower foam */}
        <path
          d="M64 210 L260 258 L456 210 L456 232 L260 286 L64 232 Z"
          fill="#6b5344"
        />
        <path
          d="M64 210 L260 258 L456 210 L260 172 Z"
          fill="#8a6b55"
        />
        {/* Pocket springs row */}
        {Array.from({ length: 11 }).map((_, i) => {
          const x = 86 + i * 32
          const green = i === 0 || i === 1 || i === 9 || i === 10
          const fill = green ? '#1A3D2F' : '#f3f5f4'
          const stroke = green ? '#0f2a20' : '#c9d0cc'
          return (
            <g key={i}>
              <ellipse cx={x} cy={168} rx="12" ry="6" fill={fill} stroke={stroke} strokeWidth="1" />
              <rect x={x - 12} y={128} width="24" height="40" rx="10" fill={fill} stroke={stroke} strokeWidth="1" />
              <ellipse cx={x} cy={128} rx="12" ry="6" fill={green ? '#24523f' : '#ffffff'} stroke={stroke} strokeWidth="1" />
            </g>
          )
        })}
        {/* Springs platform perspective fill */}
        <path
          d="M72 178 L260 222 L448 178 L448 198 L260 248 L72 198 Z"
          fill="#5c4638"
          opacity="0.35"
        />
        {/* Mid comfort foam */}
        <path
          d="M70 118 L260 162 L450 118 L450 138 L260 188 L70 138 Z"
          fill="#c4a484"
        />
        <path
          d="M70 118 L260 162 L450 118 L260 84 Z"
          fill="#d8b896"
        />
        {/* Quilted top */}
        <path
          d="M62 78 L260 128 L458 78 L458 108 L260 168 L62 108 Z"
          fill="#eef1ef"
        />
        <path
          d="M62 78 L260 128 L458 78 L260 40 Z"
          fill="#ffffff"
        />
        {/* Quilt lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M${90 + i * 52} ${58 + i * 8} L${140 + i * 36} ${88 + i * 10}`}
            stroke="#d5ddd8"
            strokeWidth="1.2"
            fill="none"
          />
        ))}
        {/* Side handle */}
        <rect x="448" y="248" width="18" height="28" rx="6" fill="#1f262b" />
        <rect x="452" y="254" width="10" height="16" rx="3" fill="#4a5560" />
      </svg>
    </div>
  )
}
