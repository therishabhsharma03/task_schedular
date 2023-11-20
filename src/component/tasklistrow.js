
import Axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
import apiService from "./apiService";
function TaskListRow(props)
{
    const {_id,task,label,dueDate} = props.obj; //Object destruction
    const dueDateLocal = moment(dueDate).local().format('DD-MM-YYYY HH:mm');

    const handleClick = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const data = {task:task, label:label ,dueDate:dueDate}
        apiService.post("/completedTaskRoute/create-task",{...data, userid: user.userId })
        .then((res)=>{
            if(res.status===200){
                console.log("bata ballu");
                apiService.delete("/homepage/delete-task/"+_id)
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
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }
    return(
        <tr>
            <td>{task}</td>
            <td>{label}</td>
            <td>{dueDateLocal}</td>
            <td >
                <div className="btns-align">

                <Link class="btn btn-outline-primary sp" to={"/edit-task"+ _id}>Modify</Link>
                
                <button onClick={handleClick} class="btn btn-outline-primary sp">Completed</button>
                </div>
            </td>
        </tr>
    )
}
export default TaskListRow;
