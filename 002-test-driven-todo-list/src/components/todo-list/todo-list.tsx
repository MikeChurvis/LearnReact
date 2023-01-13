import { TodoItem } from "../todo-item";
import { Todo } from "../../App.types";

interface TodoListProps {
  todos: Todo[];
}

export function TodoList(props: TodoListProps) {
  const { todos } = props;

  return (
    <>
      <p data-pw="todo-count">{todos.length} items left</p>
      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </>
  );
}
