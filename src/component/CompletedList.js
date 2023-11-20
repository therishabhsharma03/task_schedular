import axios from "axios";
import {useState, useEffect} from "react";
import CompletedListRow from "./CompletedListRow";
import apiService from "./apiService";
function CompletedList(){
    const[arr, setArr] = useState([]);
    useEffect(() => {
        // Get user ID from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        
        // Make sure the user ID is available
        if (user && user.userId) {

            apiService.get(`/completedTaskRoute/${user.userId}/tasks`)
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

    const ListItems = ()=>{
        return arr.map((val,ind)=>{
            return <CompletedListRow obj={val} />
        })
    }

    return(
        <div className="skills--section">
           
        <table class="table table-bordered table-striped table-success" style={{maxWidth:"60%", margin:"10px auto"}}>
            <thead>
                <tr>
                    
                    <th class="text-center">Task</th>
                    <th class="text-center">Label</th>
                    <th class="text-center">Due Date/Time</th>
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


export default CompletedList;