import React from "react";  // Import React
import CreateTask from "./createtask";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate directly
import { message } from "antd";
import Features from "./Features"
export default function Herosection() {
  const navigate = useNavigate();  // Move useNavigate inside the functional component

  const handleSubmit = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('User data from local storage:', user);
      if (!user || !user.userId) {
        console.error('User ID not found in local storage');
        message.error("Please login before you start");
        navigate("/login");
      }
      else{
        navigate("/create-task")
      }
      // Continue with the rest of your logic for task submission if the user is logged in.
    } catch (error) {
      console.error('Error during task submission:', error);
    }
  };

  return (<>
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="hero--section--title">
            <span className="hero--section-title-color">To-Do</span> <br />
            Task Scheduler
          </h1>
          <p className="hero--section--description">
            <br />
          </p>
        </div>
        
          <button className="btn-primary btn" onClick={handleSubmit}>
            Start here
          </button>
        
      </div>
      <div className="hero--section--img">
        <img src='../calender.png' alt="This is Profile" width={"150px"}></img>
      </div>
    </section>
    <Features />
    </>
  );
}
