import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import {
  IconAlert,
  IconArrow,
  IconCheck,
  IconClose,
  IconEye,
  IconEyeOff,
  IconInfo,
  IconLock,
  IconUser,
} from './Icons'

type LoginCardProps = {
  open: boolean
  onClose: () => void
}

type Errors = { identity?: string; password?: string }
type Session = { name: string; role: string }

const DEMO = { identity: 'guru@bitmath.id', password: 'bitmath123' }

export function LoginCard({ open, onClose }: LoginCardProps) {
  const [identity, setIdentity] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [reveal, setReveal] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState<Session | null>(null)

  const identityRef = useRef<HTMLInputElement>(null)

  // kembalikan formulir ke keadaan awal setelah laci ditutup
  useEffect(() => {
    if (open) return
    const timer = window.setTimeout(() => {
      setSession(null)
      setIdentity('')
      setPassword('')
      setReveal(false)
      setErrors({})
      setLoading(false)
    }, 500)
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    const focusTimer = window.setTimeout(() => identityRef.current?.focus(), 380)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
    }
  }, [open, onClose])

  const validate = (): Errors => {
    const next: Errors = {}
    const value = identity.trim()

    if (!value) next.identity = 'Email atau NIP wajib diisi.'
    else if (value.includes('@')) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) next.identity = 'Format email belum benar.'
    } else if (!/^\d{6,20}$/.test(value)) next.identity = 'NIP harus 6–20 angka.'

    if (!password) next.password = 'Kata sandi wajib diisi.'
    else if (password.length < 8) next.password = 'Minimal 8 karakter.'

    return next
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (loading) return

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    setLoading(true)

    // Masih lokal — backend menyusul di tahap berikutnya.
    window.setTimeout(() => {
      setLoading(false)
      const ok = identity.trim().toLowerCase() === DEMO.identity && password === DEMO.password
      if (!ok) {
        setErrors({ password: 'Kartu tidak dikenali. Coba akun demo di bawah.' })
        return
      }
      setSession({ name: 'Rekan Guru', role: 'Guru Matematika' })
    }, 850)
  }

  return (
    <>
      <div className={`scrim${open ? ' is-on' : ''}`} onClick={onClose} aria-hidden="true" />

      <section
        className={`sheet${open ? ' is-on' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Formulir masuk BitMaTH"
        aria-hidden={!open}
        inert={open ? undefined : true}
      >
        <div className="sheet__card">
          <div className="sheet__head">
            <span className="sheet__kicker">Formulir kartu 02 · Arsip</span>
            <button type="button" className="sheet__close" onClick={onClose} aria-label="Tutup formulir">
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
                <h2>Kartu diterima</h2>
                <p>
                  Selamat datang, <strong>{session.name}</strong> — {session.role}. Autentikasi
                  server disambungkan pada tahap berikutnya.
                </p>
                <button type="button" className="btn-stamp" onClick={onClose}>
                  <IconCheck />
                  Mulai kerja
                </button>
                <button
                  type="button"
                  className="link"
                  style={{ marginTop: 14 }}
                  onClick={() => {
                    setSession(null)
                    setPassword('')
                  }}
                >
                  Kembali ke formulir
                </button>
              </div>
            ) : (
              <>
                <div className="sheet__intro rise" style={{ ['--d' as string]: '40ms' }}>
                  <h2>Isi kartu masuk</h2>
                  <p>Tulis email atau NIP Anda, lalu kata sandi guru.</p>
                </div>

                <div className="rule rise" style={{ ['--d' as string]: '80ms' }} />

                <form onSubmit={handleSubmit} noValidate>
                  <div className="entry rise" style={{ ['--d' as string]: '110ms' }}>
                    <label className="entry__label" htmlFor="identity">
                      <span>Email / NIP</span>
                      <span>01</span>
                    </label>
                    <div className={`entry__line${errors.identity ? ' is-error' : ''}`}>
                      <IconUser />
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
                      <p className="entry__error" id="identity-error">
                        <IconAlert />
                        {errors.identity}
                      </p>
                    )}
                  </div>

                  <div className="entry rise" style={{ ['--d' as string]: '150ms' }}>
                    <label className="entry__label" htmlFor="password">
                      <span>Kata sandi</span>
                      <span>02</span>
                    </label>
                    <div className={`entry__line${errors.password ? ' is-error' : ''}`}>
                      <IconLock />
                      <input
                        id="password"
                        name="password"
                        type={reveal ? 'text' : 'password'}
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
                        className="entry__eye"
                        onClick={() => setReveal((value) => !value)}
                        aria-label={reveal ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                        aria-pressed={reveal}
                      >
                        {reveal ? <IconEyeOff /> : <IconEye />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="entry__error" id="password-error">
                        <IconAlert />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="sheet__row rise" style={{ ['--d' as string]: '190ms' }}>
                    <label className="tick">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                      />
                      <span className="tick__box" aria-hidden="true">
                        {remember && <IconCheck size={9} strokeWidth={3} />}
                      </span>
                      Ingat perangkat
                    </label>
                    <button type="button" className="link">
                      Lupa sandi?
                    </button>
                  </div>

                  <div className="rise" style={{ ['--d' as string]: '230ms' }}>
                    <button type="submit" className="btn-stamp" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner" aria-hidden="true" />
                          Memeriksa kartu…
                        </>
                      ) : (
                        <>
                          Masuk
                          <IconArrow />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="or rise" style={{ ['--d' as string]: '270ms' }}>
                  atau
                </div>

                <div className="rise" style={{ ['--d' as string]: '300ms' }}>
                  <button
                    type="button"
                    className="btn-plain"
                    onClick={() => {
                      setErrors({})
                      setSession({ name: 'Mode Jelajah', role: 'Tanpa akun' })
                    }}
                  >
                    <IconInfo />
                    Lihat tanpa akun
                  </button>
                </div>

                <p className="sheet__note rise" style={{ ['--d' as string]: '340ms' }}>
                  Tahap pengembangan · akun demo
                  <br />
                  <strong>{DEMO.identity}</strong> / <strong>{DEMO.password}</strong>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
