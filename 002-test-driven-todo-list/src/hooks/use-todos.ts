import { Todo } from "../App.types";
import { generateID } from "../utils";
import { useLocalStorage } from "./use-local-storage";

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("react-todos", []);

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

  return {
    todos,
    createTodo,
    updateTodo,
    setCompletionOfAllTodos,
  };
}
