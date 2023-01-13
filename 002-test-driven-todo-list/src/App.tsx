import { FormEvent, useState } from "react";
import { useLocalStorage } from "./hooks";
import { TodoItem } from "./components/todo-item";
import { Todo } from "./App.types";

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
      <p data-pw="todo-count">{todos.length} items left</p>
      <ul>
        {todos.map((todo: Todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
