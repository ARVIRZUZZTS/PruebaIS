export default function Select() {
  return (
    <select
      className="
      bg-[var(--softRed)]
      text-[var(--whitte)]
      p-3
      rounded-[5px]
      transition
      hover:border
      hover:border-[var(--softRed)]
      hover:bg-[var(--whitte)]
      hover:text-[var(--softRed)]
      "
    >
      <option>Cochabamba</option>
      <option>La Paz</option>
      <option>Santa Cruz</option>
      <option>Sucre</option>
    </select>
  )
}