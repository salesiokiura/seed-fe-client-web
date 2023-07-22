import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const submitForm = () => {
    // Validate the email (e.g., check against a database)
    // Assume the email is valid if it's not empty for simplicity
    if (email) {
      setShowPasswordForm(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const updatePassword = () => {
    // Check if the password and password confirmation match
    if (password && password === confirmPassword) {
      // Handle password update logic here
      // You can send the updated password to a server or perform any other action
      setShowPasswordForm(false);
      setShowSuccessMessage(true);
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div id="emailForm" style={{ display: !showPasswordForm && !showSuccessMessage ? "block" : "none" }}>
        <div className="form-group">
          <center>
            <b><h1>Forgot Password?</h1></b>
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
        </div>
        <br />
        <center>
          <h4>Back to <b><a href="eg.html">Sign In</a></b></h4>
        </center>
        <br />

        <button onClick={submitForm} style={styles.button}>Send Code</button>
        <br />
        <br />

        <center>
          <h4> Dont have an account ? <b><a href="eg.html">Sign Up</a></b></h4>
        </center>
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
            <h3>Enter Verification Code</h3>
          </center>
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
          <h4>Didnt Receive Code ? <b><a href="http://localhost:3000/forgot_password">Resend</a></b></h4>
        </center>
        <button onClick={updatePassword} style={styles.button}>Update Password</button>
        <br />
        <br />
        <center>
          <h4> Dont have an account ?<b> <a href="eg.html">Sign Up</a></b></h4>
        </center>
        <br />
        <center>
          <h3>OR</h3>
        </center>
        <br />
        <center>
          <h4> <b><a href="eg.html">Sign In</a></b></h4>
        </center>
      </div>

      <div id="successMessage" className="success-message" style={{ display: showSuccessMessage ? "block" : "none" }}>
        <p>Password updated successfully! You can now Sign In with your new password.</p>
        <p> <b><a href="eg.html">SIGN IN</a></b></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
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
  button: {
    width: '98%',
    padding: '10px',
    borderRadius: '40px',
    border: 'none',
    backgroundColor: '#d52385',
    color: '#fff',
    cursor: 'pointer',
    margin: 'auto',
    position: 'center',
  },
};


export default ForgotPassword;
