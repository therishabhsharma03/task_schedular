import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Registerform from "./registerform";
import apiService from "./apiService";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import Spinner from "./spinner"; 
const Register = () => {
  const [arr1, setArr] = useState([]);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: arr1[0], email: arr1[1], password: arr1[2] };
    console.log(data);

    setLoading(true);

    apiService.post("/auth/register", data)
      .then((res) => {
        if (res.status === 201) {
          // Registration successful, send OTP to the user
          sendOtp();
        } else {
          setLoading(false);
          alert("Registration failed");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Error registering user");
      });
  };

  const sendOtp = () => {
    apiService.post("/auth/send-otp", { email: arr1[1] })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          setShowOtpModal(true);
          message.success("OTP sent to your Email ID");
        } else {
          alert("Failed to send OTP");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Error sending OTP");
      });
  };

  const handleOtpSubmit = () => {
    apiService.post("/auth/verify-otp", { email: arr1[1], otp: otp })
      .then((res) => {
        console.log("Received OTP:", otp);
        console.log("Verification Response:", res.data);

        if (res.status === 200) {
          message.success("User registered successfully!");
          navigate("/login");
          setShowOtpModal(false);
        } else {
          message.error("OTP verification failed");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error verifying OTP");
      });
  };
  return (
    <>
      <div className="register-page">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <Registerform getState={getState} />
          
          {loading ? <Spinner /> : ""}
        </form>
        <li>
          <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="/login"
            className="navbar--content"
          >
            Already Registered ? Login
          </Link>
        </li>
         {/* OTP Modal */}
      {showOtpModal && (
        <div style={{maxWidth:"40%",margin:"0px auto"}} class="container">
          <h3>Enter OTP</h3>
          <input
          className="contact--input"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleOtpSubmit} className="btn btn-outline-primary sp">Verify OTP</button>
        </div>
      )}
      </div>

    
    </>
  );
};

export default Register;