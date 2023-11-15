import Axios from "axios";
import {Link} from "react-router-dom";

function CompletedListRow(props){

    const{_id, task,label, dueDate} = props.obj;
   
    const handleClick=()=>{
        const user  = JSON.parse(localStorage.getItem('user'));
        const data = {task:task, label:label ,dueDate:dueDate}
        Axios.post("http://localhost:4000/homepage/add-tasks",{...data,userid:user.userId});
        Axios.delete("http://localhost:4000/completedTaskRoute/delete-task/"+_id)
        .then((res)=>{
            if(res.status===200){
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
        
    }
    
    const handleSubmit=()=>{
        console.log(_id);
        Axios.delete("http://localhost:4000/completedTaskRoute/delete-task/"+_id)
        .then((res)=>{
            if(res.status===200){
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return(
        <tr>
            <td>{task}</td>
            <td>{label}</td>
            <td>{dueDate}</td>
            <td>
                <button onClick={handleClick} class="btn btn-success mx-1">Retrieve</button>
                <button onClick={handleSubmit} class="btn btn-danger mx-1">Delete</button>
            </td>
        </tr>

    )
}

export default CompletedListRow;