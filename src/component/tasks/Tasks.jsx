import { EditTask } from "../edit/Edit";
import { Task } from "../task/Task";
import "./tasks.css";


export function Tasks({ tasks, onComplete, onDelete, onEdit, editTodo }) {
  const taskQty = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="tasks">
      <header className="tk-header">
        <div>
          <p>Create tasks</p>
          <span>{taskQty}</span>
        </div>

        <div>
          <p className="textPurple">Completed</p>
          <span>
            {completedTasks} of {taskQty}
          </span>
        </div>
      </header>

      <div className="list">
        {tasks.map((task) =>
          task.isEditing ? (
            <EditTask 
              editTodo={editTodo}
              task={task}
            />
          ) : (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          )
        )}
      </div>
      <p className="author">BY: Jerryemmanuel</p>
    </section>
  );
}
