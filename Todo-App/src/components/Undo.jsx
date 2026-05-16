function UndoToast({ undoDelete }) {
  return (
    <div className="undo-box">
      <p>Todo Deleted</p>

      <button onClick={undoDelete}>
        Undo
      </button>
    </div>
  );
}

export default UndoToast;