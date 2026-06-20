import { useRef, useState, useEffect } from 'react'
import ExercisePage from '../../components/ExercisePage'

function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    startBtnRef.current?.focus()
  }, [])

  function start() {
    if (running) return
    setRunning(true)
    intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
  }

  function stop() {
    if (!running) return
    setRunning(false)
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function reset() {
    stop()
    setRunning(false)
    setSeconds(0)
    startBtnRef.current?.focus()
  }

  function format(total: number) {
    const h = Math.floor(total / 3600)
    const m = Math.floor((total % 3600) / 60)
    const s = total % 60
    return [h, m, s].map(n => String(n).padStart(2, '0')).join(':')
  }

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="font-mono text-5xl tracking-widest tabular-nums">
        {format(seconds)}
      </div>
      <div className="flex gap-3">
        <button
          ref={startBtnRef}
          onClick={start}
          disabled={running}
          className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-40 hover:bg-green-700 transition-colors"
        >
          Start
        </button>
        <button
          onClick={stop}
          disabled={!running}
          className="px-4 py-2 rounded bg-yellow-500 text-white disabled:opacity-40 hover:bg-yellow-600 transition-colors"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default function UseRef() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useRef"
      difficulty="Beginner"
      description="useRef gives you a mutable box (ref.current) that persists across renders without triggering a re-render when changed. It has two main uses: holding a DOM reference and storing a mutable value between renders."
      whatToBuild="A stopwatch with Start, Stop, and Reset buttons. The timer displays elapsed time formatted as HH:MM:SS. Store the interval ID in a ref so you can clear it without putting it in state. Auto-focus the Start button when the component mounts."
      keyConcepts={['useRef', 'ref.current', 'DOM ref', 'mutable ref', 'setInterval', 'clearInterval']}
      workspaceFile="client/src/exercises/react/UseRef.tsx"
      hints={[
        'Declare const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null). On Start: intervalRef.current = setInterval(...). On Stop: clearInterval(intervalRef.current). Changing ref.current never triggers a re-render.',
        'The elapsed seconds should be state (useState<number>) because it drives the display. The interval ID should be a ref because changing it does not need to cause a re-render.',
        'Auto-focus on mount: const startBtnRef = useRef<HTMLButtonElement>(null), attach ref={startBtnRef} to the button, then useEffect(() => { startBtnRef.current?.focus() }, []).',
        'Format HH:MM:SS by dividing the total seconds: const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60. Pad each with String(n).padStart(2, "0") and join with colons.',
      ]}
    >
      <Stopwatch />
    </ExercisePage>
  )
}
