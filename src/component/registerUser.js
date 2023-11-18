import React,{useState} from "react";

import {Link} from "react-router-dom";
import Axios from "axios";

import Registerform from "./registerform";


const Register = ()=>{
    const[arr1,setArr] = useState([]);

    const getState = (childData) =>{
        setArr(childData);
    }

    const handleSubmit = () =>{
      const data = {name:arr1[0] , email: arr1[1] , password: arr1[2]}
      console.log(data);
        Axios.post("http://localhost:4000/auth/register",data)
        .then((res) => {
            if (res.status === 201) {
              alert("Record added Successfully");
            } else {
              alert("Registration failed");
            }
          })
          .catch((err) => {
            console.error(err);
            alert("Error registering user");
          });
    }
    return(
        <>
        
        <div className ="register-page">
           
            
                
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                          
                          <Registerform getState={getState} />
                    </form>
               
                <li>
                    <Link 
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="/login"
                    className="navbar--content">Already Registered ? Login</Link>
                </li>
            
        </div>
        </>
    )
}

export default Register ;