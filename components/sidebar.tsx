"use client"

import Image from "next/image"

type SidebarProps = {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {

  return (
    <div className={`fixed inset-0 flex z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>

      {/* fondo oscuro */}
      <div
        onClick={onClose}
        className={`
          absolute inset-0 bg-black/40
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0"}
        `}
      ></div>

      {/* SIDEBAR */}
      <div
        className={`
          relative w-[30vh] min-h-screen bg-[var(--wine)] p-6 flex flex-col gap-4
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* cerrar */}
        <button
          onClick={onClose}
          className="self-end text-[var(--whitte)] text-xl"
        >
          ✕
        </button>

        {/* FOTO USUARIO */}
        <div className="flex flex-col items-center mb-4">

          <Image
            src="/user.png"
            alt="Foto usuario"
            width={90}
            height={90}
            className="rounded-full border-4 border-[var(--whitte)] shadow-md"
          />

        </div>

        {/* OPCIONES */}

        <a className="bg-[var(--defRed)] text-[var(--whitte)] pl-5 border-l-4 border-[var(--whitte)]
        rounded-tr-[5px] rounded-br-[5px]
        hover:text-[var(--pinky)] hover:bg-[var(--whitte)] hover:border-[var(--pinky)] py-2">
          Mi perfil
        </a>

        <a className="bg-[var(--defRed)] text-[var(--whitte)] pl-5 border-l-4 border-[var(--whitte)]
        rounded-tr-[5px] rounded-br-[5px]
        hover:text-[var(--pinky)] hover:bg-[var(--whitte)] hover:border-[var(--pinky)] py-2">
          Historial
        </a>

        <hr className="border-[var(--softRed)]"/>

        <a className="bg-[var(--defRed)] text-[var(--whitte)] pl-5 border-l-4 border-[var(--whitte)]
        rounded-tr-[5px] rounded-br-[5px]
        hover:text-[var(--pinky)] hover:bg-[var(--whitte)] hover:border-[var(--pinky)] py-2">
          Alquiler
        </a>

        <a className="bg-[var(--defRed)] text-[var(--whitte)] pl-5 border-l-4 border-[var(--whitte)]
        rounded-tr-[5px] rounded-br-[5px]
        hover:text-[var(--pinky)] hover:bg-[var(--whitte)] hover:border-[var(--pinky)] py-2">
          Anticrético
        </a>

        <a className="bg-[var(--defRed)] text-[var(--whitte)] pl-5 border-l-4 border-[var(--whitte)]
        rounded-tr-[5px] rounded-br-[5px]
        hover:text-[var(--pinky)] hover:bg-[var(--whitte)] hover:border-[var(--pinky)] py-2">
          Venta
        </a>

        <hr className="border-[var(--softRed)]"/>

      </div>

    </div>
  )
}