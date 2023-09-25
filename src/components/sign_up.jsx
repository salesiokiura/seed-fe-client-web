import { ResponsiveWrapper } from '../hoc';
import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleTermsAcceptedChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const [registrationResult, setRegistrationResult] = useState(null);

  const handleRegistration = async () => {
    if (termsAccepted){
      try{
        const response = fetch('http://localhost:8080/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phoneNumber,
            password,
          }),
        });

        const data = (await response).json();
        setRegistrationResult(data.message);
      } catch (err){
        alert(err);
      }
    } else {
      alert('Fill in all the fields');
    }
  };


  const containerStyle = {
    background: '#1C2E3E',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
  };

  const formStyle = {
    background: '#fff',
    borderRadius: '15px',
    padding: '20px',
    maxWidth: '400px',
    width: '80%',
  };

  const inputStyle = {
    borderRadius: '25px',
    height: '50px',
    width: '100%',
    padding: '15px',
    backgroundColor: '#E0E0E0',
    color: '#1C2E3E',
    marginBottom: '10px',
    paddingLeft: '50px',
    backgroundPosition: '10px 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '30px 30px',
  };

  const iconStyle = {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
  };

  const switchLabelStyle = {
    marginLeft: '10px',
    color: 'black',
  };

  const buttonStyle = {
    backgroundColor: '#1C2E3E', // Dark blue color for the sign-up button
    borderRadius: '25px',
    height: '50px',
    width: '100%',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    marginTop: '20px',
  };

  const loginLinkStyle = {
    color: 'black',
    marginTop: '20px',
  };

  const checkboxStyle = {
    appearance: 'none', // Remove default checkbox styles
    width: '20px',
    height: '20px',
    backgroundColor: '#fff', // Dark blue color for the checkbox tick
    borderRadius: '5px',
    marginRight: '10px',
    border: '2px solid #1C2E3E', // Dark blue color for the checkbox border
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
  };

  const checkedCheckboxStyle = {
    ...checkboxStyle,
    backgroundColor: '#1C2E3E', // Dark blue color for the checked checkbox tick
    border: '2px solid #1C2E3E', // Dark blue color for the checked checkbox border
  };
  
  return (
    <div>
    <div className="login-container" style={containerStyle}>
      <img src="./assets/SEED full logo.png" alt="Logo" style={logoStyle} />
      <h1 style={{ marginBottom: '20px' }}>Sign Up</h1>
      <div className="sign-up-form" style={formStyle}>
        <div style={{ position: 'relative' }}>
          <input
            style={inputStyle}
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Full Name"
          />
          <span style={iconStyle}>
            <img src="./assets/user.png" alt="Full Name Icon" />
          </span>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <span style={iconStyle}>
            <img src="./assets/message.png" alt="Email Icon" />
          </span>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            style={inputStyle}
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Mobile Number"
          />
          <span style={iconStyle}>
            <img src="./assets/phone-icon.png" alt="Phone Icon" />
          </span>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            style={inputStyle}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
         
        </div>
        <div style={{ position: 'relative' }}>
          <input
            style={inputStyle}
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password"
          />
        
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={handleTermsAcceptedChange}
            id="acceptTerms"
            style={termsAccepted ? checkedCheckboxStyle : checkboxStyle}
          />
          <label htmlFor="acceptTerms" style={switchLabelStyle}>
            Accept terms and conditions
          </label>
        </div>
        <button
          style={{ ...buttonStyle, backgroundColor: '#1C2E3E' }} 
          type="submit"

          onClick={handleRegistration}
          disabled={!termsAccepted}
        >
          Sign Up
        </button>
        <p style={loginLinkStyle}>
          Already have an account ? <b><a href="/login">Login</a></b>
        </p>
      </div>
    </div>
    </div>


  );
}

export default SignUp;
