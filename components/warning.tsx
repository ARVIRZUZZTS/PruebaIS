type WarningProps = {
  message: string
  open: boolean
  onClose: () => void
}

export default function Warning({ message, open, onClose }: WarningProps) {

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-[var(--dark)] border-l-8 border-1 border-[var(--pinky)] text-[var(--pinky)] p-8 rounded-lg w-[40vh] text-center">

        <p className="mb-6">{message}</p>

        <button
          onClick={onClose}
          className="px-5 py-2 rounded-[5px] bg-[var(--defRed)] text-[var(--whitte)]
          hover:shadow-[0px_5px_9px_var(--back)] hover:bg-[var(--pinky)] hover:rotate-[-2deg]"
        >
          Entendido
        </button>

      </div>

    </div>
  )
}