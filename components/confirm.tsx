type ConfirmProps = {
  message: string
  open: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function Confirm({ message, open, onConfirm, onCancel }: ConfirmProps) {

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-[var(--isBlue)] border-l-8 border-1 border-[var(--whitte)] text-[var(--whitte)] p-8 rounded-lg w-[40vh] text-center">

        <p className="mb-6">{message}</p>

        <div className="flex justify-center gap-4">

          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-[5px] bg-[var(--isGray)] text-[var(--softRed)]
            border border-[var(--softRed)] hover:shadow-[0px_5px_9px_var(--whitte)] hover:bg-[var(--back)] hover:rotate-[-2deg]"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-[5px] bg-[var(--defRed)] text-[var(--whitte)]
            hover:shadow-[0px_5px_9px_var(--back)] hover:bg-[var(--pinky)] hover:rotate-[-2deg]"
          >
            Aceptar
          </button>

        </div>

      </div>

    </div>
  )
}