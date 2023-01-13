import { useId } from "react";

interface TodoBulkCompleterProps {
  allTodosAreCompleted: boolean;
  setCompletionOfAllTodos: (completionState: boolean) => void;
}

export function TodoBulkCompleter(props: TodoBulkCompleterProps) {
  const { allTodosAreCompleted, setCompletionOfAllTodos } = props;

  const thisElementId = useId();

  return (
    <>
      <input
        type="checkbox"
        id={thisElementId}
        checked={allTodosAreCompleted}
        onChange={(event) => setCompletionOfAllTodos(event.target.checked)}
      />
      <label htmlFor={thisElementId}>Mark all as complete</label>
    </>
  );
}
