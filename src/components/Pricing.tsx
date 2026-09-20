type Props = {
  onSignup: () => void
}

export function Pricing({ onSignup }: Props) {
  return (
    <section id="preus" className="scroll-mt-20 bg-canvas/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-sage px-3.5 py-1 text-xs font-semibold text-forest">
            Model Freemium
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Tria com vols començar.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Prova-ho gratis i escala quan ho necessitis. Sense compromisos.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-line bg-white p-8 shadow-sm">
            <p className="text-base font-semibold text-ink">Freemium</p>
            <p className="mt-3 text-4xl font-bold tracking-tight text-ink">0€ / sempre</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Comença a controlar el cicle de vida dels teus matalassos sense cost.
            </p>
            <ul className="mt-8 flex-1 space-y-3 text-sm text-ink">
              {[
                'Fins a 200 matalassos',
                'Passaport digital bàsic',
                'Inventari i vida útil',
                'Registre de manteniment',
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onSignup}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-mid"
            >
              Comença gratis →
            </button>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-3xl bg-forest p-8 text-white shadow-xl shadow-forest/25">
            <div className="absolute right-6 top-6 opacity-40" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3c0 0-7 5-7 12a7 7 0 0014 0c0-7-7-12-7-12z"
                  stroke="#A8E08C"
                  strokeWidth="1.6"
                />
                <path d="M12 10v9" stroke="#A8E08C" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="relative text-base font-semibold">Professional</p>
            <p className="relative mt-3 text-4xl font-bold tracking-tight">A mida</p>
            <p className="relative mt-3 text-sm leading-relaxed text-white/75">
              Per a cadenes i grups hotelers que volen control total i traçabilitat completa.
            </p>
            <ul className="relative mt-8 flex-1 space-y-3 text-sm">
              {[
                'Matalassos il·limitats',
                'Blockchain i codi inequívoc',
                'Integracions amb tercers (API)',
                'Dashboard d’impacte i benchmark',
                'Transferència i cadena de custòdia',
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check light />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onSignup}
              className="relative mt-8 inline-flex items-center justify-center rounded-full bg-leaf px-5 py-3 text-sm font-semibold text-forest transition hover:bg-leaf-soft"
            >
              Vols provar? →
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}

function Check({ light }: { light?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden
    >
      <path
        d="M5 12.5l5 5L20 7"
        stroke={light ? '#A8E08C' : '#1A3D2F'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
