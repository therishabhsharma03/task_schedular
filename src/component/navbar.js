import {Link} from "react-router-dom";
import{useState, useEffect} from "react";
function Nav()
{
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
                
            
            </ul>
        </div>
        
    </nav>
    )
}
export default Nav;

