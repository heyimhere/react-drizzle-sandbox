import { useState } from 'react'
import ExercisePage from '../../components/ExercisePage'

const BIO_MAX = 160

const INITIAL_STATE = {
  name: '',
  email: '',
  bio: '',
  password: '',
}

type FormFields = typeof INITIAL_STATE

function ProfileEditor() {
  const [fields, setFields] = useState<FormFields>(INITIAL_STATE)
  const [showPwd, setShowPwd] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
  }

  function handleReset() {
    setFields(INITIAL_STATE)
    setShowPwd(false)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Submitted:', fields)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-md">

      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>
          Name
        </label>
        <input
          name="name"
          value={fields.name}
          onChange={handleChange}
          placeholder="Ray Silvers"
          className="px-3 py-2 rounded-lg text-sm outline-none focus:ring-2"
          style={{
            background: 'var(--code-bg)',
            border: '1px solid var(--border)',
            color: 'var(--text-h)',
          }}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>
          Email
        </label>
        <input
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="ray@example.com"
          className="px-3 py-2 rounded-lg text-sm outline-none focus:ring-2"
          style={{
            background: 'var(--code-bg)',
            border: '1px solid var(--border)',
            color: 'var(--text-h)',
          }}
        />
      </div>

      {/* Bio + character counter */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <label className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>
            Bio
          </label>
          {/* Derived from state — no extra useState needed */}
          <span
            className="text-xs tabular-nums"
            style={{ color: fields.bio.length >= BIO_MAX ? '#f87171' : 'var(--text)' }}
          >
            {fields.bio.length} / {BIO_MAX}
          </span>
        </div>
        <textarea
          name="bio"
          value={fields.bio}
          onChange={handleChange}
          maxLength={BIO_MAX}
          rows={3}
          placeholder="Tell us about yourself…"
          className="px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 resize-none"
          style={{
            background: 'var(--code-bg)',
            border: '1px solid var(--border)',
            color: 'var(--text-h)',
          }}
        />
      </div>

      {/* Password + show/hide toggle */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>
          Password
        </label>
        <div className="flex gap-2">
          <input
            name="password"
            type={showPwd ? 'text' : 'password'}
            value={fields.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="flex-1 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2"
            style={{
              background: 'var(--code-bg)',
              border: '1px solid var(--border)',
              color: 'var(--text-h)',
            }}
          />
          <button
            type="button"
            onClick={() => setShowPwd(v => !v)}
            className="px-3 py-2 rounded-lg text-xs font-medium"
            style={{
              background: 'var(--code-bg)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              cursor: 'pointer',
            }}
          >
            {showPwd ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-1">
        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style={{ background: 'var(--accent)', cursor: 'pointer' }}
        >
          Save profile
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 rounded-lg text-sm font-medium"
          style={{
            background: 'var(--code-bg)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default function UseState() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useState"
      difficulty="Beginner"
      description="useState gives a component its own memory. Each call returns a snapshot of the current value and a setter that schedules a re-render with the new value. State is never mutated directly — you always replace it."
      whatToBuild="A user profile editor with four controlled inputs: name, email, bio (with a live character counter below the textarea), and a password field with a show/hide toggle button. Add a Reset button that restores all fields to their initial values. Use a single state object for all fields."
      keyConcepts={['useState', 'functional update', 'controlled input', 'state snapshot', 'lazy initializer']}
      workspaceFile="client/src/exercises/react/UseState.tsx"
      hints={[
        'Use a single state object for all fields and update individual fields with the spread pattern: setState(prev => ({ ...prev, [e.target.name]: e.target.value })). Wire all inputs to the same handler using the name attribute.',
        'Derive the character counter from state.bio.length directly in JSX — no extra state needed. Values you can compute from existing state should live in render, not in useState.',
        'The show/hide toggle is a separate boolean state: const [showPwd, setShowPwd] = useState(false). Use it to flip the input type attribute: type={showPwd ? "text" : "password"}.',
        'For Reset, store the initial values in a constant outside the component (so it never changes). The reset button calls setState(INITIAL_STATE). If you used a lazy initializer, call the same factory function again.',
      ]}
    >
      <ProfileEditor />
    </ExercisePage>
  )
}
