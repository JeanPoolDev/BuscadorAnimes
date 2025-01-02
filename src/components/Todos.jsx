
export function Todos({ id, description, onGetId }) {
  return (
    <li className="w-full effect-blur p-4 rounded-lg mb-4 flex justify-between items-center">
      <p className="text-lg">{description}</p>
      <button
        onClick={() => onGetId(id)}
        className="btn-danger">
        Borrar
      </button>
    </li>
  )
}
