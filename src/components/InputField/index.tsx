import React, { useRef } from "react";
import "./inputField.css";

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodos: (e: React.FormEvent) => void;
}

export const InputField: React.FC<TodoProps> = ({
  todo,
  setTodo,
  addTodos,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTodos(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="submit__button" type="submit">
        GO
      </button>
    </form>
  );
};
