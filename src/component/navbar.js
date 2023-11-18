import {Link , useNavigate} from "react-router-dom";
import{useState, useEffect} from "react";
import {message } from "antd";

function Nav()
{   
    document.addEventListener("DOMContentLoaded", function() {
        const storedUser = localStorage.getItem("user");
      
        if (storedUser !== null) {
          document.getElementById("log-out").classList.add("hid");
        } else {
          document.getElementById("log-out").classList.remove("hid");
        }
      });
    const navigate = useNavigate();
    const[navActive, setNavActive]=useState
    (false); // Nav is not active by default

    const toggleNav = () =>{  // This function opens the nav
        setNavActive(!navActive)
    }
    const closeMenu = ()=>{ // This function closes the nav
        setNavActive(false)
    }

    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth <= 500){
                closeMenu();
            }
        }
        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize",handleResize);
        };
    },[]);

    useEffect(()=>{
        if(window.innerWidth<=1200){
            closeMenu();
        }
    },[]);

    const logoutHandler = ()=>{
        localStorage.removeItem("user");
        message.success("Logout successfull");
        document.getElementById("log").classList.remove("hid");
        document.getElementById("sig").classList.remove("hid");
        document.getElementById("log-out").classList.add("hid");

        navigate('/login');
    }
    return(
        <nav className={`navbar ${navActive? "active":""}`}>
        <div>
            
            <img src="../logo.png" alt="" width={"75px"}></img>
        </div>
        <a className={`nav__hamburger ${navActive? "active":""}`} onClick={toggleNav}>
            <span className="nav__humburger__line"></span>
            <span className="nav__humburger__line"></span>
            <span className="nav__humburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive? "active":""}`}>
            <ul>
                <li>
                    <Link onClick={closeMenu} 
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="/"
                    className="navbar--content">Home</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="/register"
                    id="sig"
                    className="navbar--content">Sign-Up</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                    activeClass="navbar--active-content"
                    id="log"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="/login"
                    className="navbar--content">Login</Link>
                </li>
                <button className="btn" id = "log-out" onClick={logoutHandler}>Logout</button>
                
            
            </ul>
        </div>
        
    </nav>
    )
}
export default Nav;

