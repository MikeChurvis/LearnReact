import { FormEvent, useState } from "react";
import { useLocalStorage } from "./hooks";
import type { Todo } from "./App.types";
import { TodoList } from "./components/todo-list";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("react-todos", []);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();
    setTodos([...todos, { id: Date.now().toString(), title: newTodoTitle }]);
    setNewTodoTitle("");
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
      <TodoList todos={todos} />
    </>
  );
}

export default App;
