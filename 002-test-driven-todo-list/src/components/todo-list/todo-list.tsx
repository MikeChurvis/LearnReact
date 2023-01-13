import { TodoItem } from "../todo-item";
import { Todo } from "../../App.types";

interface TodoListProps {
  todos: Todo[];
  updateTodo: (newTodoState: Todo) => void;
}

export function TodoList(props: TodoListProps) {
  const { todos, updateTodo } = props;

  return (
    <>
      <p data-pw="todo-count">{todos.length} items left</p>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />;
        })}
      </ul>
    </>
  );
}
