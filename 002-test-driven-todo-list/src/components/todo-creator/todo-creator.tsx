import { FormEvent, useState } from "react";

interface TodoCreatorProps {
  createTodoCallback: (title: string) => void;
}

export function TodoCreator(props: TodoCreatorProps) {
  const { createTodoCallback } = props;
  const [newTodoTitle, setNewTodoTitle] = useState("");

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();
    createTodoCallback(newTodoTitle);
    setNewTodoTitle("");
  }

  return (
    <form onSubmit={handleCreateNewTodo}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
    </form>
  );
}
