import type { TodoItemProps } from "./todo-item.types";

export function TodoItem(props: TodoItemProps) {
  const { todo } = props;

  return <li data-pw="todo-title">{todo.title}</li>;
}
