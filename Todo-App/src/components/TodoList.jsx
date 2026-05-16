function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          className="todo-item"
          key={todo.id}
        >
          <p>{todo.text}</p>

          <button
            onClick={() =>
              deleteTodo(todo.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;