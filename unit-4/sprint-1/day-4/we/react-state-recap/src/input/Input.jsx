import React from "react";
import { TaskItem } from "./TaskItem";
function Task() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };
  const addTaskcome = () => {
    const newTask = {
      title: query,
      status: false,
      id: Date.now()
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Task</h1>
      <div>
        <input
          value={query}
          type="text"
          placeholder="Enter Something"
          onChange={handleChange}
        />
      </div>
      <button onClick={addTaskcome}>Add</button>
      <div>
        {tasks.map((item, index) => {
          // return <TaskItem color={index%2===0?"red":"blue"} id={item.id} title={item.title} status={item.status}/>
          return (
            <TaskItem
              color={"green"}
              key={item.id}
              title={item.title}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
}
export { Task };
