import { useEffect, useState } from "react";
import "./App.css";
import { useAuthorized } from "./hooks/auth";

function App() {
  const [todos, setTodos] = useState([]);
  const authorized = useAuthorized();

  console.log(authorized);

  useEffect(() => {
    fetch("todos", {
      method: "GET",
    }).then(async (response) => {
      const data = await response.json();
      setTodos(data);
    });
  }, []);

  return (
    <div className="App">
      Todo Application
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.checked} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
