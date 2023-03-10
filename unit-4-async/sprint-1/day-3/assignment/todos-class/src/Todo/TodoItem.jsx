function TodoItem({ title, status, id }) {
  return (
    <div>
      {title} {"------>"} {status ? "Completed" : "Not Completed"}
    </div>
  );
}
export default TodoItem;
