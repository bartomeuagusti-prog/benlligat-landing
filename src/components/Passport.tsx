export function Passport() {
  return (
    <section id="passaport" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-sage px-3.5 py-1 text-xs font-semibold text-forest">
            Passaport digital obligatori
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            Cada matalàs, una identitat verificable.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Benlligat genera el passaport digital de cada matalàs amb identificació única
            (QR / GS1 i registre immutable) perquè fabricants, hotelers i gestors treballin amb la
            mateixa traça fins al reciclatge i la reintroducció al mercat.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Blockchain card */}
          <article className="relative overflow-hidden rounded-3xl bg-forest p-7 text-white shadow-xl shadow-forest/20 sm:p-8">
            <div
              className="pointer-events-none absolute -bottom-8 -right-6 opacity-[0.12]"
              aria-hidden
            >
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="28" stroke="#A8E08C" strokeWidth="6" />
                <circle cx="50" cy="50" r="16" stroke="#A8E08C" strokeWidth="4" />
                <path
                  d="M50 10c8 12 12 22 12 40S58 78 50 90M50 10c-8 12-12 22-12 40s4 26 12 40M18 38h64M18 62h64"
                  stroke="#A8E08C"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-leaf/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#A8E08C" strokeWidth="1.8" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#A8E08C" strokeWidth="1.8" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#A8E08C" strokeWidth="1.8" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#A8E08C" strokeWidth="1.8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Codi inequívoc amb suport blockchain</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
              Registre immutable de la identitat i dels esdeveniments clau del cicle de vida.
              Transparència per a tots els actors de la cadena.
            </p>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-forest-deep/60 px-3.5 py-2 text-xs font-medium text-leaf ring-1 ring-white/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="7" height="7" fill="#A8E08C" />
                <rect x="14" y="3" width="7" height="7" fill="#A8E08C" />
                <rect x="3" y="14" width="7" height="7" fill="#A8E08C" />
                <rect x="14" y="14" width="3" height="3" fill="#E8F5E0" />
                <rect x="18" y="14" width="3" height="3" fill="#E8F5E0" />
                <rect x="14" y="18" width="7" height="3" fill="#A8E08C" />
              </svg>
              BLG-0xA9F3·202U
            </div>
          </article>

          {/* Carbon card */}
          <article className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-sage">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 20a8 8 0 100-16 8 8 0 000 16z"
                  stroke="#1A3D2F"
                  strokeWidth="1.7"
                />
                <path d="M12 12l5-3" stroke="#1A3D2F" strokeWidth="1.7" strokeLinecap="round" />
                <circle cx="12" cy="12" r="1.5" fill="#1A3D2F" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-forest">Petjada de carboni</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Quantifica l’impacte de fabricació, ús i final de cicle per prendre decisions amb
              dades — no amb intuïció.
            </p>
            <dl className="mt-8 space-y-3 border-t border-line pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Fabricació</dt>
                <dd className="font-semibold text-ink">62 kg CO₂e</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Vida útil mitjana</dt>
                <dd className="font-semibold text-ink">5,4 anys</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">vs abocador</dt>
                <dd className="font-semibold text-forest">−41%</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  )
}
