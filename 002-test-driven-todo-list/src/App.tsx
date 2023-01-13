import { FormEvent, useState } from "react";
import { useLocalStorage } from "./hooks";

type Todo = {
  id: string;
  title: string;
};

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("react-todos", []);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();
    setTodos([...todos, { id: Date.now().toString(), title: newTodoTitle }]);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTodo}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo: Todo) => {
          return (
            <li data-pw="todo-title" key={todo.id}>
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
