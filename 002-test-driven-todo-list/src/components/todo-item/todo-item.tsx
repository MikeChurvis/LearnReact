import { Todo } from "../../App.types";

interface TodoItemProps {
  todo: Todo;
  updateTodo: (newTodoState: Todo) => void;
}

export function TodoItem(props: TodoItemProps) {
  const { todo, updateTodo } = props;

  return (
    <li data-pw="todo-item" className={todo.completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.completed}
        aria-label="Mark as completed"
        onChange={(event) =>
          updateTodo({ ...todo, completed: event.target.checked })
        }
      />
      <span data-pw="todo-title">{todo.title}</span>
    </li>
  );
}
