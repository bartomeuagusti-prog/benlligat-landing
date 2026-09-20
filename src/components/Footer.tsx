import { LeafLogo } from './LeafLogo'

type Props = {
  onSignup: () => void
}

export function Footer({ onSignup }: Props) {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <LeafLogo size={34} variant="light" />
            <span className="text-[15px] font-bold tracking-tight">Benlligat</span>
          </a>
          <button
            type="button"
            onClick={onSignup}
            className="inline-flex w-fit rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-forest transition hover:bg-leaf-soft"
          >
            Vols provar?
          </button>
        </div>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80">
          Control i traçabilitat del residu voluminós dels matalassos per a hotelers, dins
          l’economia circular.
        </p>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Benlligat. Tots els drets reservats.</p>
          <p>Economia circular · Passaport digital · Blockchain</p>
        </div>
      </div>
    </footer>
  )
}
