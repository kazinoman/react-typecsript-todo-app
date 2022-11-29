import React from "react";
import { Todos } from "../../model/Todo";
import { SingleTodo } from "./SingleTodo";
import "./todoList.css";

interface TodosProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const TodoList: React.FC<TodosProps> = ({ todos, setTodos }) => {
  return (
    <div className=" todos">
      {todos.map((data) => (
        <>
          <SingleTodo
            key={data.id}
            todo={data}
            todos={todos}
            setTodos={setTodos}
          />
        </>
      ))}
    </div>
  );
};
