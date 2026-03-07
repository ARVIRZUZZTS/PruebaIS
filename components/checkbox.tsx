type CheckboxProps = {
  label: string
}

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <label className="flex items-center gap-4 text-[var(--isBlue)]">
      
      <input
        type="checkbox"
        className="
        w-6 h-6
        accent-red-600
        rounded-[5px]
        border border-[var(--softRed)]
        "
      />

      {label}

    </label>
  )
}