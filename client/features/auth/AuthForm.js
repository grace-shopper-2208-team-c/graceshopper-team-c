import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };

  return (
    <>
    <Box
sx={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: "center",
  alignItems: "center",
  '& > :not(style)': {
    m: 1,
    width: 200,
    padding: 3,
  },
}}
>
<Paper elevation={3}>
  <h2 align='center'>Login</h2>
      <form onSubmit={handleSubmit} name={name}>
        <div>

          <input name="username" placeholder="Username" type="text" required/>
        </div>
        <div>

          <input name="password" placeholder="Password" type="password" required/>
        </div>
        <div>
        <Button 
        variant="contained" 
        type="submit"
        fullWidth>{displayName}</Button>
        </div>
        {error && <div> {error} </div>}
      </form>
          </Paper>
          </Box>
    
        </>
  );
};

export default AuthForm;
