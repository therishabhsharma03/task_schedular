import axios from "axios";
import { useEffect, useState } from "react";
import TaskListRow from "./tasklistrow";
import { message } from "antd";
import apiService from "./apiService";

function TaskList() {
    const [arr, setArr] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Get user ID from localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Make sure the user ID is available
        if (user && user.userId) {

            apiService.get(`/homepage/${user.userId}/tasks`)
                .then((res) => {
                    if (res.status === 200) {
                        setArr(res.data);
                    } else {
                        Promise.reject();
                    }
                })
                .catch((err) => alert(err));
        } else {
            console.error('User ID not found in localStorage');
        }
    }, []);

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <TaskListRow key={ind} obj={val} />;
        });
    };

    return (
        <div>
            <h1 className="text-center my-2"></h1>
            <table style={{ margin: "0px auto", maxWidth: "60%" }} className="table table-striped table-bordered table-success">
                <thead>
                    <tr>
                        <th className="text-center">Task</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Due Date/Time</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>
    );
}

export default TaskList;
