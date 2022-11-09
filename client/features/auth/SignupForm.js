import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';

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

    dispatch(authenticate({ username, password, method: formName }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
    

        <div>
          <label htmlFor="name">
            <small>Name</small>
          </label>
          <input name="name" type="text" />
        </div>

        <div>
          <label htmlFor="street_address">
            <small>Street Address</small>
          </label>
          <input name="street_address" type="text" />
        </div>

        <div>
          <label htmlFor="city">
            <small>City</small>
          </label>
          <input name="city" type="text" />
        </div>

        <div>
          <label htmlFor="state">
            <small>State</small>
          </label>
          <input name="state" type="text" />
        </div>

        <div>
          <label htmlFor="zip">
            <small>Zip</small>
          </label>
          <input name="zip" type="text" />
        </div>

        <div>
          <label htmlFor="phone">
            <small>Phone</small>
          </label>
          <input name="phone" type="text" />
        </div>

        <div>
          <label htmlFor="email">
            <small>E-mail</small>
          </label>
          <input name="email" type="text" />
        </div>



        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default SignupForm;
