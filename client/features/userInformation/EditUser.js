import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSingleUser } from './settingsSlice';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const EditUser = (props) => {
  const { openPopup, setOpenPopup, user } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleUser(user.id));
  }, []);

  const [city, setCity] = useState(user.city);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [state, setState] = useState(user.state);
  const [street_address, setStreet] = useState(user.street_address);
  const [zip, setZip] = useState(user.zip);
  const [id, setId] = useState(user.id);

  async function editUser() {
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
    setOpenPopup(false);
  }

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              flexGrow: 1,
              textAlign: 'center',
              marginBottom: -50,
              marginLeft: 25,
            }}
          >
            <p>
              <strong>Edit Account Details</strong>
            </p>
          </div>
          <CancelIcon
            sx={{ '&:hover': { color: 'darkgrey', cursor: 'pointer' } }}
            onClick={() => {
              setOpenPopup(false);
            }}
          ></CancelIcon>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="editUserDiv">
          <Box
            sx={{
              '& > :not(style)': {
                m: 6,
                width: 180,
                height: 430,
                padding: 5,
                paddingLeft: 8,
              },
            }}
          >
            <Paper elevation={8}>
              <form onSubmit={editUser}>
                <label>Name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(evt) => setName(evt.target.value)}
                  value={name}
                  required
                />
                <br></br>
                <br></br>
                <label>Email:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(evt) => setEmail(evt.target.value)}
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
                <br></br>
                <br></br>
                <label>Phone:</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={(evt) => setPhone(evt.target.value)}
                  value={phone}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
                <br></br>
                <br></br>
                <label>Street Address:</label>
                <input
                  id="street_address"
                  name="street_address"
                  type="text"
                  onChange={(evt) => setStreet(evt.target.value)}
                  value={street_address}
                  required
                />
                <br></br>
                <br></br>
                <label>Zip Code:</label>
                <input
                  id="zip"
                  name="zip"
                  type="number"
                  onChange={(evt) => setZip(evt.target.value)}
                  value={zip}
                  required
                />
                <br></br>
                <br></br>
                <label>City:</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  onChange={(evt) => setCity(evt.target.value)}
                  value={city}
                  required
                />
                <br></br>
                <br></br>
                <label>State:</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  onChange={(evt) => setState(evt.target.value)}
                  value={state}
                  required
                />
                <br></br>
                <br></br>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ marginLeft: 35 }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Box>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUser;
