type BtnnProps = {
  children: React.ReactNode
  onClick?: () => void
}

export default function Btnn({ children, onClick }: BtnnProps) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 rounded-[5px]
      bg-[var(--isGray)] text-[var(--softRed)]
      border border-[var(--softRed)]
      shadow-[0px_5px_9px_var(--isBlue)] transition
      hover:bg-[var(--back)] hover:rotate-[-2deg]"
    >
      {children}
    </button>
  )
}