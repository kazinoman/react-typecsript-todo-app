import React from "react";
import { Todos } from "../../model/Todo";
import "./singleTodo.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface TodoProps {
  todo: Todos;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const SingleTodo: React.FC<TodoProps> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editedTodo, setEditedTodo] = React.useState<string>(todo.todo);
  const inpRef = React.useRef(null);

  React.useEffect(() => {
    inpRef.current?.focus();
  }, [edit]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editedTodo } : todo
      )
    );
    setEdit(false);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e, todo.id)}>
      {edit ? (
        <input
          ref={inpRef}
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
          className="input"
        />
      ) : todo.isComplete ? (
        <s className="single_todo__text">{todo.todo}</s>
      ) : (
        <span className="single_todo__text">{todo.todo}</span>
      )}
      <div className="right__part" onClick={() => setEdit(true)}>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
