import CreateTask from "./createtask"
import {Link} from "react-router-dom";


export default function Herosection(){
    return(
        <section id ="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"></p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title-color">To-Do</span>{" "}
                        <br />
                    Task Schedular
                    </h1>
                    <p className="hero--section--description">
                        
                        <br />
                    </p>
                </div>
                <Link to="/create-task">
                <button className="btn-primary btn">Start here</button>
                </Link>
            </div>
            <div className="hero--section--img">
                <img src='../calender.png' alt="This is Profile" width={"150px"}></img>
            </div>
        </section>
    )
}