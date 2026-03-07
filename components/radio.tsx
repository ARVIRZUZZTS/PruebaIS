type RadioProps = {
  label: string
  name: string
}

export default function Radio({ label, name }: RadioProps) {
  return (
    <label className="flex items-center gap-4 text-[var(--isBlue)]">

      <input
        type="radio"
        name={name}
        className="
        w-6 h-6
        accent-[var(--pinky)]
        border border-[var(--softRed)]
        "
      />

      {label}

    </label>
  )
}