
import { useState } from "react";

function Taskform(props)
{   
    const [task,settask] = useState(props.taskValue);
    const [label,setlabel] = useState(props.labelValue);
    const [dueDate,setdueDate] = useState(props.dueDateValue);

    const arr = [task,label,dueDate];  //arr= [Raj,raj@gmail.com,1]

    const handleClick = () => {
        props.getState(arr);
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}} class="container">
            <input defaultValue={props.taskValue} onChange={(event)=>settask(event.target.value)} class="contact--input" placeholder="Task"/>
            <input defaultValue={props.labelValue} onChange={(event)=>setlabel(event.target.value)} class="contact--input" placeholder="Write a brief description"/>
            <input type="datetime-local" defaultValue={props.dueDateValue} onChange={(event)=>setdueDate(event.target.value)} class="contact--input" placeholder="Due date"/>
            <button onClick={handleClick} class="btn-primary btn" type="submit">Submit</button>
        </div>
    )
}
export default Taskform;
