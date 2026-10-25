import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import {
  IconAlert,
  IconArrowRight,
  IconCheck,
  IconClose,
  IconDrawer,
  IconEye,
  IconEyeOff,
  IconInfo,
  IconLock,
  IconUser,
} from './Icons'

type AuthSheetProps = {
  open: boolean
  onClose: () => void
}

type Errors = { identity?: string; password?: string }

type Session = { name: string; role: string }

const DEMO_ACCOUNT = { identity: 'guru@bitmath.id', password: 'bitmath123' }

export function AuthSheet({ open, onClose }: AuthSheetProps) {
  const [identity, setIdentity] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState<Session | null>(null)

  const identityRef = useRef<HTMLInputElement>(null)

  // setelah laci ditutup, kembalikan isi form ke keadaan awal
  useEffect(() => {
    if (open) return
    const timer = window.setTimeout(() => {
      setSession(null)
      setIdentity('')
      setPassword('')
      setShowPassword(false)
      setErrors({})
      setLoading(false)
    }, 600)
    return () => window.clearTimeout(timer)
  }, [open])

  // kunci scroll latar + tombol Escape + autofokus saat laci terbuka
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    const focusTimer = window.setTimeout(() => identityRef.current?.focus(), 420)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
    }
  }, [open, onClose])

  const validate = (): Errors => {
    const next: Errors = {}
    const value = identity.trim()

    if (!value) {
      next.identity = 'Email atau NIP wajib diisi.'
    } else if (value.includes('@')) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        next.identity = 'Format email belum benar.'
      }
    } else if (!/^\d{6,20}$/.test(value)) {
      next.identity = 'NIP harus berupa 6–20 angka.'
    }

    if (!password) {
      next.password = 'Kata sandi wajib diisi.'
    } else if (password.length < 8) {
      next.password = 'Kata sandi minimal 8 karakter.'
    }

    return next
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (loading) return

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setLoading(true)

    // Placeholder alur autentikasi — backend menyusul di tahap berikutnya.
    window.setTimeout(() => {
      setLoading(false)

      const isDemo =
        identity.trim().toLowerCase() === DEMO_ACCOUNT.identity && password === DEMO_ACCOUNT.password

      if (!isDemo) {
        setErrors({ password: 'Akun belum dikenali. Gunakan akun demo di bawah.' })
        return
      }

      setSession({ name: 'Rekan Guru', role: 'Guru Matematika' })
    }, 900)
  }

  const handleGuest = () => {
    setErrors({})
    setSession({ name: 'Mode Jelajah', role: 'Tanpa akun' })
  }

  const resetToForm = () => {
    setSession(null)
    setPassword('')
    setErrors({})
  }

  return (
    <>
      <div
        className={`scrim${open ? ' is-on' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <section
        className={`sheet${open ? ' is-on' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Form masuk BitMaTH"
        aria-hidden={!open}
        inert={open ? undefined : true}
      >
        <div className="sheet__card">
          <div className="sheet__lip">
            <span className="sheet__label">
              <IconDrawer size={13} />
              Laci 01 · Formulir masuk
            </span>
            <button
              type="button"
              className="sheet__close"
              onClick={onClose}
              aria-label="Tutup form masuk"
            >
              <IconClose />
            </button>
          </div>

          <div className="sheet__body">
            {session ? (
              <div className="success" role="status">
                <div className="stamp" aria-hidden="true">
                  <strong>Terverifikasi</strong>
                  <span>BitMaTH · Laci 01</span>
                </div>
                <h3>Laci siap dipakai</h3>
                <p>
                  Selamat datang, <strong>{session.name}</strong>. {session.role}. Autentikasi
                  server akan disambungkan pada tahap berikutnya.
                </p>
                <button type="button" className="btn-primary" onClick={onClose}>
                  <IconCheck size={14} strokeWidth={2.6} />
                  Mulai kerja
                </button>
                <button
                  type="button"
                  className="link-btn"
                  style={{ marginTop: 15 }}
                  onClick={resetToForm}
                >
                  Kembali ke form
                </button>
              </div>
            ) : (
              <>
                <div className="form-head rise" style={{ ['--d' as string]: '50ms' }}>
                  <p className="kicker">Formulir 01 · Masuk</p>
                  <h2>Isi formulir masuk</h2>
                  <p>Gunakan akun guru untuk membuka seluruh perangkat di dalam laci.</p>
                </div>

                <div className="rule rise" style={{ ['--d' as string]: '90ms' }} />

                <form onSubmit={handleSubmit} noValidate>
                  <div className="field rise" style={{ ['--d' as string]: '120ms' }}>
                    <label className="field__label" htmlFor="identity">
                      <span>Email / NIP</span>
                      <span>01</span>
                    </label>
                    <div className={`field__wrap${errors.identity ? ' is-error' : ''}`}>
                      <IconUser size={16} />
                      <input
                        id="identity"
                        name="identity"
                        ref={identityRef}
                        type="text"
                        inputMode="email"
                        autoComplete="username"
                        placeholder="guru@bitmath.id"
                        value={identity}
                        aria-invalid={Boolean(errors.identity)}
                        aria-describedby={errors.identity ? 'identity-error' : undefined}
                        onChange={(event) => {
                          setIdentity(event.target.value)
                          if (errors.identity) setErrors((prev) => ({ ...prev, identity: undefined }))
                        }}
                      />
                    </div>
                    {errors.identity && (
                      <p className="field__error" id="identity-error">
                        <IconAlert />
                        {errors.identity}
                      </p>
                    )}
                  </div>

                  <div className="field rise" style={{ ['--d' as string]: '160ms' }}>
                    <label className="field__label" htmlFor="password">
                      <span>Kata sandi</span>
                      <span>02</span>
                    </label>
                    <div className={`field__wrap${errors.password ? ' is-error' : ''}`}>
                      <IconLock size={16} />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        placeholder="Minimal 8 karakter"
                        value={password}
                        aria-invalid={Boolean(errors.password)}
                        aria-describedby={errors.password ? 'password-error' : undefined}
                        onChange={(event) => {
                          setPassword(event.target.value)
                          if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                        }}
                      />
                      <button
                        type="button"
                        className="field__toggle"
                        onClick={() => setShowPassword((value) => !value)}
                        aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                        aria-pressed={showPassword}
                      >
                        {showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="field__error" id="password-error">
                        <IconAlert />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="form-row rise" style={{ ['--d' as string]: '200ms' }}>
                    <label className="check">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                      />
                      <span className="check__box" aria-hidden="true">
                        {remember && <IconCheck size={11} strokeWidth={3} />}
                      </span>
                      Ingat perangkat ini
                    </label>
                    <button type="button" className="link-btn">
                      Lupa sandi?
                    </button>
                  </div>

                  <div className="rise" style={{ ['--d' as string]: '240ms' }}>
                    <button type="submit" className="btn-primary" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner" aria-hidden="true" />
                          Membuka laci…
                        </>
                      ) : (
                        <>
                          Masuk
                          <IconArrowRight size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="divider rise" style={{ ['--d' as string]: '290ms' }}>
                  atau
                </div>

                <div className="rise" style={{ ['--d' as string]: '330ms' }}>
                  <button type="button" className="btn-ghost" onClick={handleGuest}>
                    <IconInfo size={13} />
                    Jelajahi tanpa akun
                  </button>
                </div>

                <p className="form-note rise" style={{ ['--d' as string]: '370ms' }}>
                  Tahap pengembangan — akun demo:
                  <br />
                  <strong>{DEMO_ACCOUNT.identity}</strong> / <strong>{DEMO_ACCOUNT.password}</strong>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
