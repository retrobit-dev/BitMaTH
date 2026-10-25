import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useClock } from '../hooks/useClock'
import { ClassroomScene } from './ClassroomScene'
import { IconAlert, IconArrow, IconCheck, IconEye, IconEyeOff, IconLock, IconUser } from './Icons'

type Errors = { identity?: string; password?: string }
type Player = { name: string; role: string }

const DEMO = { identity: 'guru@bitmath.id', password: 'bitmath123' }

export function GameLogin() {
  const clock = useClock()

  const [identity, setIdentity] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [reveal, setReveal] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [player, setPlayer] = useState<Player | null>(null)

  const identityRef = useRef<HTMLInputElement>(null)

  // Enter memulai, Escape mengosongkan formulir
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && player) {
        setPlayer(null)
        setPassword('')
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [player])

  const validate = (): Errors => {
    const next: Errors = {}
    const value = identity.trim()

    if (!value) next.identity = 'NIP atau email wajib diisi.'
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

    // Slot penyimpanan masih lokal — server menyusul.
    window.setTimeout(() => {
      setLoading(false)
      const ok = identity.trim().toLowerCase() === DEMO.identity && password === DEMO.password
      if (!ok) {
        setErrors({ password: 'Kartu guru tidak dikenali. Pakai akun demo di bawah.' })
        return
      }
      setPlayer({ name: 'Rekan Guru', role: 'Guru Matematika' })
    }, 800)
  }

  return (
    <div className="game">
      <ClassroomScene />
      <div className="stage-shade" aria-hidden="true" />
      <div className="crt" aria-hidden="true" />

      <header className="hud">
        <span className="hud__slot">
          <i className="hud__dot" aria-hidden="true" />
          SLOT 01 · DATA GURU
        </span>
        <span className="hud__clock">
          {clock.shortDate} · {clock.time}
        </span>
      </header>

      <main className="screen">
        <div className="logo">
          <div className="logo__plaque">
            <span className="logo__tape" aria-hidden="true" />
            <h1 className="logo__name">
              BIT<span>MATH</span>
            </h1>
            <span className="logo__sub">School Simulator</span>
          </div>
        </div>

        <section className="panel" aria-label="Masuk permainan">
          <div className="panel__bar">
            <span className="panel__title">
              <i aria-hidden="true" />
              {player ? 'SELAMAT DATANG' : 'MASUK KELAS'}
            </span>
            <span className="panel__tag">v0.3</span>
          </div>

          <div className="panel__body">
            {player ? (
              <div className="ready">
                <img className="ready__sprite" src="/sprites/guru-pdh.png" alt="Guru BitMaTH" />
                <h2>GURU SIAP MENGAJAR</h2>
                <p>
                  Selamat datang, <strong>{player.name}</strong> — {player.role}. Tahun ajaran{' '}
                  {clock.schoolYear}, semester {clock.semester}.
                </p>
                <button type="button" className="btn" onClick={() => setPlayer(null)}>
                  GANTI KARTU
                </button>
                <p className="panel__note">Simpan permainan akan aktif di tahap berikutnya.</p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label className="field__label" htmlFor="identity">
                      <span>NIP / Email</span>
                      <span>01</span>
                    </label>
                    <div className={`field__box${errors.identity ? ' is-error' : ''}`}>
                      <IconUser size={13} />
                      <input
                        id="identity"
                        name="identity"
                        ref={identityRef}
                        type="text"
                        inputMode="email"
                        autoComplete="username"
                        placeholder="19870520 201001 1 003"
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
                        <IconAlert size={10} />
                        {errors.identity}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label className="field__label" htmlFor="password">
                      <span>Kata sandi</span>
                      <span>02</span>
                    </label>
                    <div className={`field__box${errors.password ? ' is-error' : ''}`}>
                      <IconLock size={13} />
                      <input
                        id="password"
                        name="password"
                        type={reveal ? 'text' : 'password'}
                        autoComplete="current-password"
                        placeholder="••••••••"
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
                        className="field__eye"
                        onClick={() => setReveal((value) => !value)}
                        aria-label={reveal ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                        aria-pressed={reveal}
                      >
                        {reveal ? <IconEyeOff size={13} /> : <IconEye size={13} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="field__error" id="password-error">
                        <IconAlert size={10} />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="opts">
                    <label className="check">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(event) => setRemember(event.target.checked)}
                      />
                      <span className="check__box" aria-hidden="true">
                        {remember && <IconCheck size={8} strokeWidth={3} />}
                      </span>
                      Simpan kartu
                    </label>
                    <button type="button" className="link">
                      Lupa sandi
                    </button>
                  </div>

                  <button type="submit" className="btn" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner" aria-hidden="true" />
                        MEMUAT KELAS…
                      </>
                    ) : (
                      <>
                        MULAI
                        <IconArrow size={12} />
                      </>
                    )}
                  </button>
                </form>

                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => {
                    setErrors({})
                    setPlayer({ name: 'Murid Tamu', role: 'Mode Jelajah' })
                  }}
                >
                  MASUK SEBAGAI TAMU
                </button>

                <p className="panel__note">
                  Akun demo · <strong>{DEMO.identity}</strong>
                  <br />
                  sandi <strong>{DEMO.password}</strong>
                </p>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>BitMaTH · 2026</span>
        <span className="foot__keys">
          <span className="key">↵</span> mulai
          <span className="key">ESC</span> batal
        </span>
      </footer>
    </div>
  )
}
