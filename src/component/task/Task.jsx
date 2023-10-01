import "./task.css";
import { TbTrash } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Task({ task, onComplete, onDelete, onEdit }) {
  return (
    <div className="t-task">
      <button className="checkContainer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>

      <button className="editButton" onClick={() => onEdit(task.id)}>
        <BiEdit size={20} />
      </button>

      <button className="deleteButton" onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
