import { useTodos } from "./hooks";
import { TodoList } from "./components/todo-list";
import { TodoCreator } from "./components/todo-creator";
import { TodoBulkCompleter } from "./components/todo-bulk-completer";

function App() {
  const { todos, createTodo, updateTodo, setCompletionOfAllTodos } = useTodos();

  const allTodosAreCompleted = todos.every((todo) => todo.completed);

  return (
    <div id="todo-app">
      <TodoCreator createTodoCallback={createTodo} />
      <TodoBulkCompleter
        allTodosAreCompleted={allTodosAreCompleted}
        setCompletionOfAllTodos={setCompletionOfAllTodos}
      />
      <TodoList todos={todos} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
