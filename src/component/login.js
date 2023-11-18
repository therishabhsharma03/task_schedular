import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./spinner";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //from submit


const submitHandler = async (values) => {
    try {
        setLoading(true);
        const response = await axios.post("http://localhost:4000/auth/login", values);
        const data = response.data;

        // Log the entire data object
        console.log('Response data:', data);

        setLoading(false);
        message.success("login success");
        document.getElementById("log").className="hid"  ;
        document.getElementById("sig").className="hid"  ;
        document.getElementById("log-out").classList.remove("hid");
        if (data && data.user) {
            // Log user data before storing it in local storage
            console.log('User data:', data.user);

            localStorage.setItem(
                "user",
                JSON.stringify({ userId: data.user.userId, username: data.user.username })
            );
            navigate("/");
        } else {
            console.error('Invalid response format');
        }
    } catch (error) {
        setLoading(false);
        message.error("something went wrong");
        console.error('Error during registration:', error);
    }
};

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="resgister-page ">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user ? Cleck Here to regsiter</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;