import { useState } from 'react'

/**
 * Aesthetic: refined dark surface, sharp focus ring, subtle helper text.
 * Drill: placeholder, value, focus, error, disabled, with icon + helper.
 */
export default function Example() {
  const [name, setName] = useState('Ray Silvers')
  const [email, setEmail] = useState('not-an-email')

  return (
    <div
      className="w-full max-w-[320px] flex flex-col gap-5 p-7 rounded-2xl"
      style={{
        background: '#0d0f13',
        border: '1px solid #1f232b',
        fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
        boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6)',
      }}
    >
      <div>
        <p
          className="text-[10px] tracking-[0.22em] uppercase mb-4"
          style={{ color: '#5b6573', fontFamily: '"IBM Plex Mono", monospace' }}
        >
          // account
        </p>
      </div>

      <Field
        label="Full name"
        icon={<UserIcon />}
        value={name}
        onChange={setName}
        placeholder="Jane Doe"
      />

      <Field
        label="Email"
        icon={<MailIcon />}
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        error="That doesn't look like an email."
      />

      <Field
        label="Workspace handle"
        icon={<AtIcon />}
        value=""
        onChange={() => {}}
        placeholder="@your-handle"
      />

      <Field
        label="API key"
        icon={<KeyIcon />}
        value="sk-•••••••• locked"
        onChange={() => {}}
        placeholder=""
        disabled
      />
    </div>
  )
}

function Field({
  label, icon, value, onChange, placeholder, error, disabled,
}: {
  label: string
  icon: React.ReactNode
  value: string
  onChange: (v: string) => void
  placeholder: string
  error?: string
  disabled?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const hasError = !!error

  const ring = hasError ? '#ef4444' : focused ? '#7dd3fc' : 'transparent'
  const borderColor = hasError ? '#451818' : focused ? '#1e3a52' : '#1f232b'

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-[11px] tracking-wider uppercase font-semibold"
        style={{ color: '#8a94a5' }}
      >
        {label}
      </span>
      <div
        className="relative flex items-center rounded-lg transition-all duration-150"
        style={{
          background: disabled ? '#15171c' : '#11141a',
          border: `1px solid ${borderColor}`,
          boxShadow: focused && !hasError ? `0 0 0 3px ${ring}33` : hasError ? `0 0 0 3px ${ring}22` : 'none',
          opacity: disabled ? 0.55 : 1,
        }}
      >
        <span
          className="absolute left-3 flex items-center justify-center pointer-events-none"
          style={{ color: focused && !hasError ? '#7dd3fc' : '#5b6573' }}
        >
          {icon}
        </span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-transparent outline-none text-sm pl-10 pr-3 py-2.5"
          style={{
            color: '#e6e9ef',
            fontFamily: '"IBM Plex Mono", monospace',
            cursor: disabled ? 'not-allowed' : 'text',
          }}
        />
      </div>
      {hasError && (
        <span className="text-[11px]" style={{ color: '#f87171' }}>
          {error}
        </span>
      )}
    </label>
  )
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  )
}
function AtIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  )
}
function KeyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  )
}
