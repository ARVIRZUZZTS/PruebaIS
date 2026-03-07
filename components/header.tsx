export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[var(--wine)] text-[var(--whitte)] p-6 rounded-none rounded-b-lg shadow-[0px_5px_10px_var(--isBlue)]">

      <img src="/next.svg" alt="logo" className="w-16 h-16" />

      <h1 className="text-4xl font-bold">
        <span>Stack</span>
        <span className="text-[var(--pinky)] transition-colors duration-300 hover:text-[var(--whitte)]">
          Overflow
        </span>
      </h1>

    </header>
  );
}