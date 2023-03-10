function TodoItem({ id, title, status, handleToggle, handledelete }) {
  return (
    <li>
      {title}-{status ? "Completed" : "Not Completed"}
      <button onClick={() => handleToggle(id)}>toggle</button>
      <button onClick={() => handledelete(id)}>Delete</button>
    </li>
  );
}
export default TodoItem;
