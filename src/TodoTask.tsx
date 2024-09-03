
import { ITask } from "./App"; // Import the ITask interface from App.tsx


interface Prop{
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}:Prop)=>{
   return(
    <div className="task">
        <div className={"content"}>
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={() => completeTask(task.taskName)}>X</button>
    </div>
   )
}

export default TodoTask;