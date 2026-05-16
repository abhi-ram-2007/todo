import { useState } from "react";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo === "") return;

    addTodo(todo);

    setTodo("");
  }

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={(e) =>
          setTodo(e.target.value)
        }
      />

      <button>Add</button>
    </form>
  );
}

export default TodoForm;