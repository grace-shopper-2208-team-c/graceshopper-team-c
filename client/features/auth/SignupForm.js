import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../app/store';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const SignupForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const name = evt.target.name.value;
    const street_address = evt.target.street_address.value;
    const city = evt.target.city.value;
    const state = evt.target.state.value;
    const zip = evt.target.zip.value;
    const phone = evt.target.phone.value;
    const email = evt.target.email.value;
    

    dispatch(register({ name, street_address, city, state, zip, phone, email, username, password }));
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
          padding: 4,
        },
      }}
    >
      <Paper elevation={3}>
        <p><strong>Fill out the form below to register!</strong></p>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
          </label>
          <input name="username" placeholder="Username" type="text" required/>
        </div>
        <div>
          <label htmlFor="password">
          </label>
          <input name="password" placeholder="Password" type="password" required/>
        </div>
    
        <div>
          <label htmlFor="name">
          </label>
          <input name="name" placeholder="Name" type="text" required/>
        </div>

        <div>
          <label htmlFor="street_address">
          </label>
          <input name="street_address" placeholder="Street Address" type="text" required/>
        </div>

        <div>
          <label htmlFor="city">
          </label>
          <input name="city" placeholder="City" type="text" required/>
        </div>

        <div>
          <label htmlFor="state">
          </label>
          <input name="state" placeholder="State" type="text" required/>
        </div>

        <div>
          <label htmlFor="zip">
          </label>
          <input name="zip" placeholder="Zipcode" type="text" required/>
        </div>

        <div>
          <label htmlFor="phone">
          </label>
          <input name="phone" placeholder="Phone Number" type="text" required/>
        </div>

        <div>
          <label htmlFor="email">
          </label>
          <input name="email" placeholder="E-mail" type="text" required/>
        </div>
<br></br>
        <div>
          <Button variant="contained" type="submit">{displayName}</Button>
        </div>
        {error && <div> {error} </div>}
      </form>
      </Paper>
      </Box>

    </>
  );
};

export default SignupForm;
