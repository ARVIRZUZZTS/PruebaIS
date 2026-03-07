export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-3 bg-[var(--isGray)] p-4 rounded-lg border-b-2 border-[var(--softRed)]">

      <a
        href="#"
        className="flex pl-5 pr-5 items-center text-[var(--defRed)] 
        transition-colors duration-300 hover:text-[var(--pinky)] hover:border-[var(--pinky)] hover:bg-[var(--whitte)]"
      >
        Inicio
      </a>

      <div className="w-[4px] h-6 bg-[var(--defRed)] rotate-[20deg]"></div>

      <a
        href="#"
        className="flex pl-5 pr-5 items-center text-[var(--defRed)] 
        transition-colors duration-300 hover:text-[var(--pinky)] hover:border-[var(--pinky)] hover:bg-[var(--whitte)]"
      >
        Propiedades
      </a>

      <div className="w-[4px] h-6 bg-[var(--defRed)] rotate-[20deg]"></div>

      <a
        href="#"
        className="flex pl-5 pr-5 items-center text-[var(--defRed)] 
        transition-colors duration-300 hover:text-[var(--pinky)] hover:border-[var(--pinky)] hover:bg-[var(--whitte)]"
      >
        Casas
      </a>

      <div className="w-[4px] h-6 bg-[var(--defRed)] rotate-[20deg]"></div>

      <a
        href="#"
        className="flex pl-5 pr-5 items-center text-[var(--defRed)] 
        transition-colors duration-300 hover:text-[var(--pinky)] hover:border-[var(--pinky)] hover:bg-[var(--whitte)]"
      >
        Cochabamba
      </a>

      <div className="w-[4px] h-6 bg-[var(--defRed)] rotate-[20deg]"></div>

      <span className="flex pl-5 pr-5 items-center text-[var(--dark)] font-semibold">
        Casa Moderna
      </span>

    </nav>
  );
}