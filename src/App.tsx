import {useState} from "react";
import './App.css'
import TodoTask from "./TodoTask.tsx";

export interface ITask{
    taskName: string;
    deadline: number;
}

function App() {
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState(0);
    const [todoList, setTodo] = useState<ITask[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.name === "task")  {
          setTask(event.target.value);
      }else {
          setDeadline(Number(event.target.value));
      }

    };

    const addTask = () => {
        const newTask = { taskName: task, deadline: deadline };
        setTodo([...todoList, newTask]);
        setTask("");
        setDeadline(0);
    };

    const completeTask = (taskNameToDelete: string) => {
        setTodo(todoList.filter((task) =>{
            return task.taskName != taskNameToDelete
        }))
    }

  return (
    <>
        <div className="App">
         <div className={"header"}>
             <div className={"inputContainer"}>
               <input type={"text"} name={"task"} placeholder={"Task..."}  onChange={handleInputChange} value={task} />
               <input type={"number"} name={"deadline"} placeholder={"Deadline..."} onChange={handleInputChange} value={deadline} />
             </div>
             <button onClick={addTask}>Add task</button>
         </div>
           <div className={"todoList"}>
               {todoList.map((task : ITask, key: number  ) =>{
                   return <TodoTask key={key} task={task} completeTask={completeTask}/>;

               })}
           </div>
        </div>
    </>
  )
}






export default App
