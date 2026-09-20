import { useEffect, useState } from 'react'
import { LeafLogo } from './LeafLogo'

const NAV = [
  { href: '#experiencia', id: 'experiencia', label: 'Experiència' },
  { href: '#passaport', id: 'passaport', label: 'Passaport' },
  { href: '#ecosistema', id: 'ecosistema', label: 'Ecosistema' },
  { href: '#preus', id: 'preus', label: 'Preus' },
]

type Props = {
  onSignup: () => void
}

export function Header({ onSignup }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? 'border-b border-line/80 bg-white/90 shadow-sm shadow-forest/5 backdrop-blur-md'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <LeafLogo size={34} />
          <span className="text-[15px] font-bold tracking-tight text-ink">Benlligat</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                active === item.id ? 'text-forest' : 'text-muted hover:text-forest'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 sm:flex">
          <button
            type="button"
            onClick={onSignup}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-forest transition hover:border-forest/30 hover:bg-sage"
          >
            Registra’t
          </button>
          <button
            type="button"
            onClick={onSignup}
            className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-mid"
          >
            Vols provar?
          </button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-forest md:hidden"
          aria-expanded={open}
          aria-label="Obrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mòbil">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-sage"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  onSignup()
                }}
                className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-forest"
              >
                Registra’t
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  onSignup()
                }}
                className="rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-white"
              >
                Vols provar?
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
