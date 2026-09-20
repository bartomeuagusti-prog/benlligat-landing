import { useEffect, useState } from 'react'
import { MattressVisual } from './MattressVisual'

const STEPS = [
  {
    id: '01',
    label: 'INVENTARI',
    title: 'Crea i ubica el matalàs',
    body: 'El responsable dona d’alta cada matalàs amb les dades del fabricant i la seva ubicació. Cada peça entra a l’inventari amb la seva identitat única.',
  },
  {
    id: '02',
    label: 'CICLE DE VIDA',
    title: 'Vida útil de 8 anys',
    body: 'Cada matalàs neix amb 8 anys de vida útil que es van reduint amb l’ús real. Teixit stretch, fibres termoreguladores i viscoelàstica d’alta densitat, capa a capa.',
  },
  {
    id: '03',
    label: 'SOSTENIBILITAT',
    title: 'Petjada de carboni',
    body: 'Registra la petjada de carboni i les dades clau del fabricant per entendre l’impacte real de cada matalàs dins l’economia circular.',
  },
  {
    id: '04',
    label: 'ALLARGA LA VIDA',
    title: 'Manteniment i neteja',
    body: 'El nucli de molles ensacades multipunt i el marc estabilitzador. Registra accions de manteniment i neteja per allargar l’esperança de vida del producte.',
  },
  {
    id: '05',
    label: 'FINAL DE CICLE',
    title: 'Llindar i reciclatge',
    body: 'En assolir el llindar crític, Benlligat recomana la substitució i activa el desmuntatge, el reciclatge i la reintroducció al mercat.',
  },
]

export function Experience() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % STEPS.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  const step = STEPS[active]

  return (
    <section
      id="experiencia"
      className="relative scroll-mt-20 border-t border-line/60 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative flex gap-6">
            <div
              className="relative mt-1 hidden w-[3px] shrink-0 self-stretch sm:block"
              aria-hidden
            >
              <div className="absolute inset-0 border-l-2 border-dashed border-line" />
              <div
                className="absolute left-0 w-[3px] rounded-full bg-forest transition-all duration-500 ease-out"
                style={{
                  top: `calc(${active} * (100% / ${STEPS.length}))`,
                  height: `calc(100% / ${STEPS.length} - 8px)`,
                }}
              />
            </div>

            <div className="min-w-0 flex-1 border-l-[3px] border-forest pl-5 sm:border-0 sm:pl-0">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-forest">
                {step.id} — {step.label}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest sm:text-[2.25rem]">
                {step.title}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">{step.body}</p>

              <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Passos de l’experiència">
                {STEPS.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => setActive(i)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      i === active
                        ? 'bg-forest text-white'
                        : 'bg-canvas text-muted ring-1 ring-line hover:text-forest'
                    }`}
                  >
                    {s.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px]">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(197,223,184,0.5)_0%,transparent_68%)]"
              aria-hidden
            />
            <MattressVisual className="relative" />
          </div>
        </div>
      </div>
    </section>
  )
}
