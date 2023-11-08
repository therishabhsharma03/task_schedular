import {useState} from "react" ;
import Taskform from './taskform';
import Axios from "axios";
import {Link} from "react-router-dom"
import TaskList from "./tasklist";
function CreateTask()
{
    const[arr,setArr] = useState([]);

    const getState = (childData) =>{
        setArr(childData);
    }

    const handleSubmit = () =>{
        const data = {task:arr[0] , label: arr[1] , dueDate : arr[2]}
        Axios.post("https://tasks-6s1c.onrender.com/homepage/create-task",data)
        .then((res)=>{
            if(res.status===200)
                alert("Record added Successfully")
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
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
                <img src='../calender.png' alt="This is Profile" width={"150px"}></img>
            </div>
        <TaskList/>
        </section>
        
    )
}

export default CreateTask ;

