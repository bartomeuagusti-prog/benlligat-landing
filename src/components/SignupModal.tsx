import { useEffect, useId, useState } from 'react'
import type { FormEvent } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

type FormState = {
  hotel: string
  contact: string
  email: string
  password: string
}

const empty: FormState = { hotel: '', contact: '', email: '', password: '' }

export function SignupModal({ open, onClose }: Props) {
  const titleId = useId()
  const [form, setForm] = useState<FormState>(empty)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setForm(empty)
      setDone(false)
      setSubmitting(false)
    }
  }, [open])

  if (!open) return null

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setDone(true)
    }, 600)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-forest-deep/50 backdrop-blur-sm"
        aria-label="Tancar"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-forest/20">
        <div className="flex items-start justify-between border-b border-line px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-forest-mid">
              Hotelers
            </p>
            <h2 id={titleId} className="mt-1 text-xl font-bold text-ink">
              {done ? 'Compte creat' : 'Registra’t a Benlligat'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted transition hover:bg-sage hover:text-forest"
            aria-label="Tancar formulari"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {done ? (
          <div className="px-6 py-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A3D2F" strokeWidth="2.2">
                <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-ink">Benvingut/da, {form.contact || 'hoteler'}!</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Hem creat el compte de prova per a <strong className="text-forest">{form.hotel}</strong>.
              Aquesta demo no envia dades a cap servidor — és només un flux local.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-mid"
            >
              Tornar a la pàgina
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            <Field
              label="Nom de l’hotel"
              id="signup-hotel"
              value={form.hotel}
              onChange={(v) => update('hotel', v)}
              placeholder="Hotel Can Benlligat"
              required
            />
            <Field
              label="Persona de contacte"
              id="signup-contact"
              value={form.contact}
              onChange={(v) => update('contact', v)}
              placeholder="Nom i cognoms"
              required
            />
            <Field
              label="Correu electrònic"
              id="signup-email"
              type="email"
              value={form.email}
              onChange={(v) => update('email', v)}
              placeholder="direccio@hotel.cat"
              required
            />
            <Field
              label="Contrasenya"
              id="signup-password"
              type="password"
              value={form.password}
              onChange={(v) => update('password', v)}
              placeholder="Mínim 8 caràcters"
              minLength={8}
              required
            />
            <p className="text-xs text-muted">
              Flux de demostració: no hi ha backend. Les dades romanen al navegador.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-mid disabled:opacity-70"
            >
              {submitting ? 'Creant compte…' : 'Crear compte'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  minLength,
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  minLength?: number
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className="w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-forest-mid focus:ring-2 focus:ring-leaf/40"
      />
    </label>
  )
}
