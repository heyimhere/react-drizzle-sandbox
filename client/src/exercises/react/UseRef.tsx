import ExercisePage from '../../components/ExercisePage'

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
      {/* Your code goes here */}
    </ExercisePage>
  )
}
