import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import UndoToast from "../components/Undo";

function Dashboard() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [deletedTodo, setDeletedTodo] =
    useState(null);

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([newTodo, ...todos]);
  }

  function deleteTodo(id) {
    const removedTodo = todos.find(
      (todo) => todo.id === id
    );

    setDeletedTodo(removedTodo);

    const updatedTodos = todos.filter(
      (todo) => todo.id !== id
    );

    setTodos(updatedTodos);

    setTimeout(() => {
      setDeletedTodo(null);
    }, 5000);
  }

  function undoDelete() {
    if (deletedTodo) {
      setTodos([deletedTodo, ...todos]);

      setDeletedTodo(null);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="todo-box">
        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
        />
      </div>

      {deletedTodo && (
        <UndoToast
          undoDelete={undoDelete}
        />
      )}
    </div>
  );
}

export default Dashboard;