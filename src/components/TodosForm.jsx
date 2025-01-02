import { useState } from "react"

export function TodosForm({ onGetTodo, onGetAnime }) {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime() * 3,
      description: search,
      done: false
    }

    onGetTodo(newTodo);
    onGetAnime(search);
    setSearch('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-4">
      <input
        type="text"
        className="flex-1 p-4 rounded-lg text-xl text-black"
        placeholder="comer, jugar, hacer..."
        value={search}
        onChange={handleChange}
      />
      <button type="submit" className="p-4 bg-blue-500 text-white rounded-lg">
        Guardar
      </button>
    </form>
  )
}
