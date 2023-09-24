import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
  };

  const submitForm = () => {
    if (isEmailValid(email)) {
      setShowPasswordForm(true);
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const updatePassword = () => {
    if (isStrongPassword(password) && password === confirmPassword) {
      setShowPasswordForm(false);
      setShowSuccessMessage(true);
      setPasswordError("");
    } else {
      setPasswordError("Passwords do not match or do not meet the password requirements.");
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>

        <center>
        
        <img src="./assets/SEED full logo.png" alt="Logo" style={styles.logo} />
        </center>
        <div id="emailForm" style={{ display: !showPasswordForm && !showSuccessMessage ? "block" : "none" }}>
          <div className="form-group">
            <center>
            <br />
            <br />
            <br />
            <br />
              <h2><b>Forgot Password ?</b></h2>
            </center>
            <br />
            <center>
              <h3>Enter Email Address</h3>
            </center>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <p style={{ color: 'red' }}>{emailError}</p>
          </div>
          <br />
          <center>
            <h4> Back to <Link to="/login"><b>Sign In</b></Link></h4>
          </center>
          <br />
          <button onClick={submitForm} style={styles.button}>Send Code</button>
          <br />
          <br />
          <center>
            <h4> Don't have an account? <Link to="/sign_up"><b>Sign Up</b></Link></h4>
          </center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div id="passwordForm" style={{ display: showPasswordForm && !showSuccessMessage ? "block" : "none" }}>
          <div className="form-group">
            <center>
              <h3><b>Enter Verification Code to Reset Password</b></h3>
            </center>
            <br />
            <label htmlFor="code">Enter Code:</label>
            <input
              type="code"
              id="code"
              placeholder="Enter Verification Code"
              style={styles.input}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <p style={{ color: 'red' }}>{passwordError}</p>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <br />
          <center>
            <h4>Didn't Receive Code ? <b><a href="http://localhost:3000/forgot_password">Resend</a></b></h4>
          </center>
          <button onClick={updatePassword} style={styles.button}>Update Password</button>
          <br />
          <br />
          <center>
            <h4> Don't have an account? <Link to="/sign_up"><b>Sign Up</b></Link></h4>
          </center>
          <br />
          <center>
            <h3>OR</h3>
          </center>
          <br />
          <center>
            <h4> <Link to="/login"><b>Sign In</b></Link></h4>
          </center>
        </div>
        <div id="successMessage" className="success-message" style={{ display: showSuccessMessage ? "block" : "none" }}>
          <p>Password updated successfully! You can now Sign In with your new password.</p>
          <h4> <Link to="/login"><b>Sign In</b></Link></h4>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#1C2E3E',
    maxWidth: '400px',
    margin: '50px auto',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '18px',
    border: '1px solid #ccc',
  },
  logo: {
    position: 'absolute',
    top: '0',
    left: '0',
  },
  button: {
    width: '98%',
    padding: '10px',
    borderRadius: '40px',
    border: 'none',
    backgroundColor: '#2A4454',
    color: '#fff',
    cursor: 'pointer',
    margin: 'auto',
    position: 'center',
  },
  pageBackground: {
    backgroundColor: '#2A4454',
    minHeight: '100vh',
    padding: '15px'
  },
};

export default ForgotPassword;
