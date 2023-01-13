import { useLocalStorage } from "./hooks";
import type { Todo } from "./App.types";
import { TodoList } from "./components/todo-list";
import { TodoCreator } from "./components/todo-creator";
import { useId } from "react";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("react-todos", []);

  function createTodo(title: string) {
    setTodos([
      ...todos,
      { id: Date.now().toString(), title: title, completed: false },
    ]);
  }

  function updateCompleteOnAllTodos(newCompleteState: boolean) {
    setTodos(
      todos.map((todo) => {
        return { ...todo, completed: newCompleteState };
      })
    );
  }

  function updateTodo(newTodoState: Todo) {
    const todoIndex = todos.findIndex((todo) => todo.id === newTodoState.id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = newTodoState;
    setTodos(updatedTodos);
  }

  const toggleAllTodosCompletedId = useId();
  const allTodosAreCompleted = todos.every((todo) => todo.completed);

  return (
    <div id="todo-app">
      <TodoCreator createTodoCallback={createTodo} />
      <input
        type="checkbox"
        id={toggleAllTodosCompletedId}
        checked={allTodosAreCompleted}
        onChange={(event) => updateCompleteOnAllTodos(event.target.checked)}
      />
      <label htmlFor={toggleAllTodosCompletedId}>Mark all as complete</label>
      <TodoList todos={todos} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
