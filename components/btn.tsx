type BtnProps = {
  children: React.ReactNode
  onClick?: () => void
}

export default function Btn({ children, onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 rounded-[5px] bg-[var(--defRed)] text-[var(--whitte)]
      shadow-[0px_5px_9px_var(--isBlue)] transition
      hover:bg-[var(--pinky)] hover:rotate-[-2deg]"
    >
      {children}
    </button>
  )
}