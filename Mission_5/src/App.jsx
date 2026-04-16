import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 
  const getBorder = (priority) => {
    if (priority === "High") return "red";
    if (priority === "Low") return "green";
    return "orange";
  };

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        status: "todo",
        priority,
        editing: false,
      },
    ]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const moveTask = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const toggleEdit = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, editing: !t.editing } : t
      )
    );
  };

  const updateText = (id, newText) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: newText, editing: false } : t
      )
    );
  };


  const filteredTasks = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );


  const Column = ({ title, status }) => (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const id = Number(e.dataTransfer.getData("id"));
        moveTask(id, status);
      }}
    >
      <h2>{title}</h2>

      {filteredTasks
        .filter((t) => t.status === status)
        .map((task) => (
          <div
            key={task.id}
            className="card"
            style={{ borderColor: getBorder(task.priority) }}
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("id", task.id)
            }
          >
            {task.editing ? (
              <input
                defaultValue={task.text}
                onBlur={(e) =>
                  updateText(task.id, e.target.value)
                }
                autoFocus
              />
            ) : (
              <p onClick={() => toggleEdit(task.id)}>
                {task.text}
              </p>
            )}

            <small style={{ opacity: 0.7 }}>
              {task.priority}
            </small>

            <div className="btns">
              <button onClick={() => moveTask(task.id, "todo")}>
                To Do
              </button>
              <button
                onClick={() => moveTask(task.id, "progress")}
              >
                Progress
              </button>
              <button onClick={() => moveTask(task.id, "done")}>
                Done
              </button>
              <button onClick={() => deleteTask(task.id)}>
                X
              </button>
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div className="app">
      <h1> Kanban Board</h1>

      <div className="top">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add task..."
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button onClick={addTask}>Add</button>

        <input
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="board">
        <Column title="To Do" status="todo" />
        <Column title="In Progress" status="progress" />
        <Column title="Done" status="done" />
      </div>
    </div>
  );
}