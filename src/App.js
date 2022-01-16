import React from "react";
import "./App.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return; //vizsgálja h irtunk e az inpba, ha nem ->return
    addTodo(value); // ha igen, meghivja az addtodot az inp értékével
    setValue(""); //
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Kész!</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
function App() {
  const [todos, setTodos] = React.useState([
    { text: "Odabujni Gergőhöz", isCompleted: false },
    { text: "Szilva...", isCompleted: false },
    { text: "Kávé <3", isCompleted: false },
  ]);
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <p>Todos</p>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
