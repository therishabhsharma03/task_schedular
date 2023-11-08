
import Axios from "axios";
import { Link } from "react-router-dom";

function TaskListRow(props)
{
    const {_id,task,label,dueDate} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("http://localhost:4000/homepage/create-task/delete-task" + _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Task Completed successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }
    return(
        <tr>
            <td>{task}</td>
            <td>{label}</td>
            <td>{dueDate}</td>
            <td class="d-flex justify-content-center">
                <button class="btn btn-sm btn-success">
                    <Link class="text-decoration-none text-light" to={"/edit-student/"+ _id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-sm btn-danger mx-3">Completed</button>
            </td>
        </tr>
    )
}
export default TaskListRow;
