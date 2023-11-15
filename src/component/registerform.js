
import { useState } from "react";

function Registerform(props)
{
    const [name,setname] = useState(props.nameValue);
    const [email,setemail] = useState(props.emailValue);
    const [password,setpassword] = useState(props.passwordValue);

    const arr1 = [name,email,password];  //arr= [Raj,raj@gmail.com,1]

    const handleClick = () => {
        props.getState(arr1);
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}} class="container">
            <input defaultValue={props.nameValue} onChange={(event)=>setname(event.target.value)} class="contact--input" placeholder="Name"/>
            <input type="email" defaultValue={props.emailValue} onChange={(event)=>setemail(event.target.value)} class="contact--input" placeholder="Email"/>
            <input type="password" defaultValue={props.passwordValue} onChange={(event)=>setpassword(event.target.value)} class="contact--input" placeholder="Password"/>
            <button onClick={handleClick} class="btn-primary btn" type="submit">Submit</button>
        </div>
    )
}
export default Registerform;