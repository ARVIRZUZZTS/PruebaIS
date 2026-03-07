export default function Nav() {
  return (
    <nav className="flex gap-[3vh] bg-[var(--isGray)] p-4 rounded-lg border-b-2 border-[var(--softRed)]">

      <a
        href="#"
        className="min-w-[10vh] flex pl-5 pr-5 items-center text-[var(--defRed)] border-l-4 border-[var(--defRed)] transition-colors duration-300 hover:text-[var(--pinky)] hover:border-[var(--pinky)] hover:bg-[var(--whitte)]"
      >
        Inicio
      </a>

      <a
        href="#"
        className="min-w-[10vh] flex pl-5 pr-5 items-center text-[var(--defRed)] border-l-4 border-[var(--defRed)] transition-colors duration-300 hover:text-[var(--pinky)] hover:border-[var(--pinky)] hover:bg-[var(--whitte)]"
      >
        Propiedades
      </a>

      <a
        href="#"
        className="min-w-[10vh] flex pl-5 pr-5 items-center text-[var(--defRed)] border-l-4 border-[var(--defRed)] transition-colors duration-300 hover:text-[var(--pinky)] hover:border-[var(--pinky)] hover:bg-[var(--whitte)]"
      >
        Blog
      </a>

    </nav>
  );
}