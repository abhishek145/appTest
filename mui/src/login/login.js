import React, { useState } from 'react';
import '../css/login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Signup from './signup';
export default function Login() {
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [renderin, setRenderin] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("All fields are required");
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
    }
    if (email) {
      if (!validEmail(email)) {
        setValid(false);
        return;
      } else {
        setValid(true);
      }
    }
    setRenderin(true);
  };
  const handleSignup = (e) => {
    e.preventDefault();
    setRenderin(false);
  };
  const validEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  return (
    <>
      {renderin ? (
        <div className='Loinform'>
          <div className="header">
            <h1>Login</h1>
          </div>
          <div className='center'>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!valid && (
          <p>enter a valid email</p>
      )}
              <br/>
              <TextField
                id="outlined-password-input"
                label="Password"
                type='password'
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br/>
              <button className='submit' id="loginbtn" onClick={handleSubmit} type="submit">Login</button>
              <button className='submit' id="signupbtn" onClick={handleSignup}>Signup</button>
            </Box>
          </div>
        </div>
      ) : (
        <Signup/>
      )}
      
    </>
  );
}
