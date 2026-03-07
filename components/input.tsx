type InputProps = {
  placeholder?: string
  type?: string
}

export default function Input({ placeholder, type = "text" }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
      h-[5vh] min-w-[30vh] text-[3vh]
      border-l-[5px] border-r border-y
      border-[var(--softRed)]
      rounded-[5px]
      bg-[var(--white)]
      text-[var(--isBlue)]
      outline-none
      px-4
      "
    />
  )
}