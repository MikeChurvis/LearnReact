import { useLocalStorage } from "./hooks";
import type { Todo } from "./App.types";
import { TodoList } from "./components/todo-list";
import { TodoCreator } from "./components/todo-creator";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("react-todos", []);

  function createTodo(title: string) {
    setTodos([...todos, { id: Date.now().toString(), title: title }]);
  }

  return (
    <>
      <TodoCreator createTodoCallback={createTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
