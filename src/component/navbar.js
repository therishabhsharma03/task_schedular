import {Link , useNavigate} from "react-router-dom";
import{useState, useEffect} from "react";
import {message } from "antd";
function Nav()
{
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
                    className="navbar--content">Sign-Up</Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="/login"
                    className="navbar--content">Login</Link>
                </li>
                <button className="btn" onClick={logoutHandler}>Logout</button>
                
            
            </ul>
        </div>
        
    </nav>
    )
}
export default Nav;

