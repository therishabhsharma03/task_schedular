
import Axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';
function TaskListRow(props)
{
    const {_id,task,label,dueDate} = props.obj; //Object destruction
    const dueDateLocal = moment(dueDate).local().format('DD-MM-YYYY HH:mm');

    const handleClick = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const data = {task:task, label:label ,dueDate:dueDate}
        Axios.post("http://localhost:4000/completedTaskRoute/create-task",{...data, userid: user.userId })
        .then((res)=>{
            if(res.status===200){
                console.log("bata ballu");
                Axios.delete("http://localhost:4000/homepage/delete-task/"+_id)
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
            <td class="d-flex justify-content-center">
                <button class="btn btn-sm btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-task"+ _id}>Modify</Link>
                </button>
                <button onClick={handleClick} class="btn btn-sm btn-danger mx-3">Completed</button>
            </td>
        </tr>
    )
}
export default TaskListRow;
