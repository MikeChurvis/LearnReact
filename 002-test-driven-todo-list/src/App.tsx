import { useLocalStorage } from "./hooks";
import type { Todo } from "./App.types";
import { TodoList } from "./components/todo-list";
import { TodoCreator } from "./components/todo-creator";
import { TodoBulkCompleter } from "./components/todo-bulk-completer";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("react-todos", []);

  /**
   * You would need to generate 1 billion elements
   * in the span of 1 milisecond to have a 1 in 10 million chance
   * of a key collision.
   */
  function generateID() {
    const thisMoment = Date.now().toString();
    const largeRandomHex = Math.floor(
      Math.random() * Math.pow(10, 16)
    ).toString(16);
    return `${thisMoment}-${largeRandomHex}`;
  }

  function createTodo(title: string) {
    setTodos([...todos, { id: generateID(), title: title, completed: false }]);
  }

  function setCompletionOfAllTodos(completionState: boolean) {
    setTodos(
      todos.map((todo) => {
        return { ...todo, completed: completionState };
      })
    );
  }

  function updateTodo(newTodoState: Todo) {
    const todoIndex = todos.findIndex((todo) => todo.id === newTodoState.id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = newTodoState;
    setTodos(updatedTodos);
  }

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
