import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { fetchSingleUser } from './settingsSlice';
import EditIcon from '@mui/icons-material/Edit';
import EditUser from './EditUser';
import OrderHistory from './OrderHistory';

const Settings = () => {
  const user = useSelector((state) => state.auth.me);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleUser(user.id));
  }, []);

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="settingsDiv">
      <h2>Settings Page</h2>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 220,
            padding: 3,
          },
        }}
        className="muiBoxSettings"
      >
        <Paper elevation={6}>
          <div>
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 1 }}>
                <h2>User Information</h2>
              </div>
              <EditIcon
                style={{ display: 'flex', marginTop: 20 }}
                sx={{ '&:hover': { color: 'darkgrey', cursor: 'pointer' } }}
                onClick={() => setOpenPopup(true)}
              ></EditIcon>
            </div>
          </div>
          <EditUser
            user={user}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          ></EditUser>
          <hr></hr>
          <label>Name: {user.name}</label>
          <label>Email: {user.email}</label>
          <label>Phone: {user.phone}</label>
          <label>Street Address: {user.street_address}</label>
          <label>Zip Code: {user.zip}</label>
          <label>City: {user.city}</label>
          <label>State: {user.state}</label>
        </Paper>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& > :not(style)': {
            m: 1,
            width: 488,
            padding: 4,
          },
        }}
      >
        <Paper elevation={8}>
          <h2>Order History</h2>
          <hr></hr>
          <OrderHistory id={user.id} />
        </Paper>
      </Box>
    </div>
  );
};

export default Settings;
