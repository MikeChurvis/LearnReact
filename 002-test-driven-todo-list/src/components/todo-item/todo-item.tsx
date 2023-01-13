import type { Todo } from "../../App.types";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem(props: TodoItemProps) {
  const { todo } = props;

  return <li data-pw="todo-title">{todo.title}</li>;
}
