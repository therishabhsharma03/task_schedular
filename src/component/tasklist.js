import Axios from "axios";
import { useEffect, useState } from "react";
import TaskListRow from "./tasklistrow";

function TaskList() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/homepage")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data)
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {  //arr=[{_id,name,email,rollNo},{},{},{},...]
            return <TaskListRow key={ind} obj={val} />
        })
    }
    return (
        <div>
            <h1 class="text-center my-2"></h1>
            <table style={{ margin: "0px auto", maxWidth: "60%" }} class="table table-striped table-bordered table-success">
                <thead>
                    <tr>
                        <th class="text-center">Task</th>
                        <th class="text-center">Description</th>
                        <th class="text-center">Due Date</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>

    )
}
export default TaskList;

