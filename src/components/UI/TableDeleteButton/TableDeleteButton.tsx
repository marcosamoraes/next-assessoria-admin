type TableDeleteButtonProps = {
  onClick: () => void
}
export default function TableDeleteButton({ onClick }: TableDeleteButtonProps) {
  return (
    <button
      className="bg-danger px-3 py-1 rounded-xl hover:bg-danger/70 text-white inline-flex items-center"
      onClick={onClick}
    >
      Excluir
    </button>
  )
}
