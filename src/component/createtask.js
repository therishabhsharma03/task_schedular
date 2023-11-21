import {useState} from "react" ;
import Taskform from './taskform';
import axios from "axios";
import {Link} from "react-router-dom"
import TaskList from "./tasklist";
import { message } from "antd";
import CompletedList from "./CompletedList";
import apiService from "./apiService";
import Spinner from "./spinner"
function CreateTask()
{   

    const[arr,setArr] = useState([]);
    const[loading,setLoading] = useState(false);
    const getState = (childData) =>{
        setArr(childData);
    }

    const handleSubmit = async () => {
        try {
            const data = {
                task: arr[0],
                label: arr[1],
                dueDate: arr[2]
            };

            const user = JSON.parse(localStorage.getItem('user'));
            console.log('User data from local storage:', user);
            if (!user || !user.userId) {
                console.error('User ID not found in local storage');
                return;
            }
            
            setLoading(true);
            
            // Include user ID in the data being sent to the server
            await apiService.post("/homepage/add-tasks", { ...data, userid: user.userId });
            
            setLoading(false);
            console.log(data)
            
            ;
            // window.location.reload();
            message.success("Task Added Successfully");
           
        } catch (error) {
            console.error('Error during task submission:', error);
            setLoading(false);
            message.error("Something went wrong");
        }
    }

    
    return(
        
        <section id ="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"></p>
                    <h1 className="hero--section--title">
                        
                    <form onSubmit={handleSubmit}>
                          <h1>Schedule Your tasks</h1>
                      

                          <Taskform getState={getState} />
              
                    </form>

                    </h1>
                    <p className="hero--section--description">
                        
                        <br />
                    </p>
                </div>
               
            </div>
            <div className="hero--section--img">
            {loading ? <Spinner /> :  <TaskList/>}
           
            </div>
      
        {/* <CompletedList/> */}
        </section>
        
    )
}

export default CreateTask ;

