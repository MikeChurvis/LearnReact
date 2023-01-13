import type { TodoListProps } from "./todo-list.types";
import { TodoItem } from "../todo-item";

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
