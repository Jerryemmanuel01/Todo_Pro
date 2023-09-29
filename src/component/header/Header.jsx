import { useState } from "react";
import { AiOutlinePlusCircle} from 'react-icons/ai'
import "./header.css"

export function Header({onAddTasks}) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if(title){
      onAddTasks(title);
    }
    
    setTitle('');
  }

  function onchangeTitle(event) {
    setTitle(event.target.value);
  }
  
  return (
    <>
      <header className="header">
        <p className="head-txt">TODO PRO</p>
        <p className="author">BY: Jerryemmanuel</p>

        <form onSubmit={handleSubmit} className="newTaskForm">
          <input
            type="text"
            placeholder="add a new task"
            value={title}
            onChange={onchangeTitle}
          />
          <button>Create
            <AiOutlinePlusCircle />
          </button>
        </form>
      </header>
    </>
  );
}