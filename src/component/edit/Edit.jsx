import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./edit.css";

export function EditTask({ editTodo, task }) {
  const [title, setTitle] = useState(task.title);

  function handleSubmit(event) {
    event.preventDefault();
    if (title) {
      editTodo(title, task.id);
    }

    setTitle("");
  }

  function onchangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <header className="e-header">
        <form onSubmit={handleSubmit} className="editTaskForm">
          <input
            type="text"
            placeholder="update task"
            value={title}
            onChange={onchangeTitle}
          />
          <button>
            Update
            <BsFillCheckCircleFill />
          </button>
        </form>
      </header>
    </>
  );
}
