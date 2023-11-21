import React from "react";

const OtpForm = ({ otp, setOtp, handleOtpSubmit }) => {
  return (
    <div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleOtpSubmit}>
        <label>
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <button type="submit">Submit OTP</button>
      </form>
    </div>
  );
};

export default OtpForm;
