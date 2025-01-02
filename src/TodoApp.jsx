import { Animes } from "./components/Animes";
import { Todos } from "./components/Todos";
import { TodosForm } from "./components/TodosForm";
import { useFetch } from "./hooks/useFetch";
import { useTodos } from "./hooks/useTodos";

export function TodoApp() {

  const { todos, handleForm, handleRemoveTodo } = useTodos();
  const { mapperAnimes, getFetchAnimes } = useFetch();

  const handleGetAnime = (search) => {
    getFetchAnimes({ search })
  }

  return (
    <>

      <div className="max-w-6xl m-auto">

        <header className="m-10 space-y-6">
          <h1 className="text-6xl text-center">
            Buscador de Animes y Todos
          </h1>

          <TodosForm onGetTodo={handleForm} onGetAnime={handleGetAnime} />
        </header>

        <main className="flex gap-4 flex-col md:flex-row justify-center ">
          <section className=" w-full md:w-1/2 rounded-xl shadow-lg shadow-white/10 p-2">
            <ul>
              {
                todos.map(todo => (
                  <Todos key={todo.id} {...todo} onGetId={handleRemoveTodo} />
                ))
              }
            </ul>
          </section>


          <section className=" w-full md:w-1/2 rounded-xl shadow-lg shadow-white/10 p-2">
            <Animes animes={mapperAnimes} />
          </section>
        </main>


      </div>




    </>
  )
}
