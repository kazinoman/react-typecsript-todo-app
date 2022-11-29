import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header, InputField, TodoList } from "./components";
import { Todos } from "./model/Todo";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const handleAddTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isComplete: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <Header />
      <InputField
        todo={todo}
        setTodo={setTodo}
        addTodos={(e) => handleAddTodos(e)}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
