import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { fetchSingleUser } from './settingsSlice';

const Settings = () => {
  const user = useSelector((state) => state.auth.me);
  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleUser(user.id));
  }, []);

  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [street_address, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [id, setId] = useState('');

  async function editUser(evt) {
    await axios.put(`/api/users/${user.id}`, {
      city,
      email,
      name,
      phone,
      state,
      street_address,
      zip,
      id,
    });
  }

  return (
    <div>
      <h2>Settings Page</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: 300,
            height: 250,
            padding: 3,
          },
        }}
      >
        <Paper elevation={6}>
          <h2>User Information</h2>
          <hr></hr>
          <label>Name: {user.name}</label>
          <label>Email: {user.email}</label>
          <label>Phone: {user.phone}</label>
          <label>Street Address: {user.street_address}</label>
          <label>Zip Code: {user.zip}</label>
          <label>City: {user.city}</label>
          <label>State: {user.state}</label>
        </Paper>
        <Paper elevation={6}>
          <h2>Order History</h2>
          <hr></hr>
        </Paper>
      </Box>
    </div>
  );
};

export default Settings;
