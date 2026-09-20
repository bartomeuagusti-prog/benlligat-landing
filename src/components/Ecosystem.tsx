const ACTORS = [
  {
    title: 'Hotelers',
    body: 'Creen i ubiquen els matalassos a l’inventari.',
    icon: 'hotel',
  },
  {
    title: 'Fabricants',
    body: 'Aporten dades tècniques i de petjada de carboni.',
    icon: 'factory',
  },
  {
    title: 'Gestors de residus',
    body: 'Com TIRGY: planifiquen la recollida, la distribució i el destí final amb custòdia.',
    icon: 'truck',
  },
]

export function Ecosystem() {
  return (
    <section id="ecosistema" className="scroll-mt-20 bg-forest py-20 text-white lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-leaf ring-1 ring-white/10">
          Ecosistema connectat
        </span>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          La mateixa dada a tots els stakeholders.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Benlligat comparteix la informació de cada matalàs amb fabricants, gestors de residus,
          certificadores i entitats del tercer sector, perquè tot el cicle del producte treballi
          amb les mateixes dades.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {ACTORS.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-leaf/20 text-leaf">
                <ActorIcon name={a.icon} />
              </div>
              <h3 className="text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActorIcon({ name }: { name: string }) {
  if (name === 'hotel') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 20V8l8-4 8 4v12H4z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    )
  }
  if (name === 'factory') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 20V10l6 4V10l6 4V6h6v14H3z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 16h11V9H3v7zM14 13h4l3 3v3h-7v-6z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="19" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="19" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
