import { useEffect, useState } from "react"
import { Header } from "./component/header/Header"
import { Tasks } from "./component/tasks/Tasks"

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSaved() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  useEffect( ()=>{
    loadSaved();
  }, [])

  function setTaskAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function togglecompleted(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTaskAndSave(newTasks);
  }

  function deleteTask(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTaskAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTasks={addTask} />
      <Tasks 
        tasks={tasks}
        onComplete={togglecompleted}
        onDelete={deleteTask}
      />
    </>
  );
}

export default App
