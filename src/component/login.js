import React, { useState, useEffect } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./spinner";
import apiService from "./apiService";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const response = await apiService.post("/auth/login", values);
      const data = response.data;

      // Log the entire data object
      console.log('Login Response data:', data);

      setLoading(false);

      if (data && data.user) {
        // Log user data before storing it in local storage
        console.log('User data:', data.user);

        localStorage.setItem(
          "user",
          JSON.stringify({ userId: data.user.userId, username: data.user.username })
        );
        navigate("/");
        message.success("Login success");
        window.location.reload();
      } else {
        console.error('Invalid response format');
        message.error("Login failed");
      }
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
      console.error('Error during login:', error);
    }
  };

  // Prevent login if user is already logged in
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="resgister-page">
      {loading && <Spinner />}
      <div style={{maxWidth:"40%",margin:"0px auto"}} class="container">
        
      <Form layout="vertical" onFinish={submitHandler}>
        <div style={{ maxWidth: "30%", margin: "250px auto" }} className="container">
          <h1>Login</h1>

          <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <input type="email"  className="contact--input" placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
            <input type="password" className="contact--input" placeholder="Password" />
          </Form.Item>

          <button className="btn btn-primary" style={{ margin: "10px auto" }} type="submit">
            Login
          </button>

          <div className="d-flex justify-content-between" style={{ maxWidth: "100%", margin: "0px auto" }}>
            <Link to="/register">Not a user? Click Here to register</Link>
          </div>
        </div>
      </Form>
      </div>
    </div>
  );
};

export default LoginForm;
