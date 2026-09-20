type Props = {
  onSignup: () => void
  onDemo: () => void
}

const STATS = [
  { value: '8 anys', label: 'vida útil de partida' },
  { value: '100%', label: 'traçabilitat unitària' },
  { value: 'QR / GS1', label: 'identificació digital' },
  { value: '−CO₂', label: 'residus i emissions evitades' },
]

export function Hero({ onSignup, onDemo }: Props) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft sage glow top-right */}
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(197,223,184,0.55)_0%,rgba(232,242,228,0.35)_45%,transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-10 top-20 h-64 w-64 rounded-full bg-leaf/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-sm font-medium text-forest shadow-sm shadow-forest/5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 3c0 0-7 5-7 12a7 7 0 0014 0c0-7-7-12-7-12z"
                stroke="#1A3D2F"
                strokeWidth="1.8"
              />
              <path d="M12 10v9" stroke="#1A3D2F" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Passaport digital · Economia circular
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            El cicle de vida dels teus matalassos,{' '}
            <span className="text-forest">sota control.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Benlligat dona als hotelers el control i la comprensió del residu voluminós dels
            matalassos: crea i ubica cada matalàs a l’inventari, segueix-ne la petjada de carboni,
            genera el passaport digital i facilita’n la reintroducció al mercat.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onSignup}
              className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-forest/20 transition hover:bg-forest-mid"
            >
              Registra’t
            </button>
            <button
              type="button"
              onClick={onDemo}
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-forest/25 hover:bg-sage"
            >
              Demanar demo
            </button>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-line/80 pt-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
