import React, { useState, useEffect } from 'react';
import '../css/signup.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Login from './login';

export default function Signup() {
  const [renderin, setRenderin] = useState(false);
  const [Name, setName] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Full Name:', Name);
    console.log('Phone Number:', Phonenumber);
    console.log('Password:', password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRenderin(true);
  };

  useEffect(() => {
    fetch("http://localhost:3002/data/gether")
      .then(response => response.json())
      .then(data => {
        const { name } = data.results[0];
        console.log('name:', name);
      });
  }, []);

  return (
    <>
      {!renderin ? (
        <div className='Loinform1'>
          <div className="header1">
            <h1>Sign-up</h1>
          </div>
          <div className='center1'>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSignup}
            >
              <TextField
                id="Name"
                label="Name"
                variant="outlined"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <br/>
              <TextField
                id="Phonenumber"
                label="Phonenumber"
                variant="outlined"
                value={Phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <br/>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              <button className='submit' id="signupbtn" onClick={handleSignup} type="submit">Signup</button>
            </Box>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
