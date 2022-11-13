import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import { fetchSingleUser } from './settingsSlice';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const EditUser = (props) => {
  const { openPopup, setOpenPopup, user } = props;

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
          <div style={{ flexGrow: 1 }}>Edit Information</div>
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
                m: 1,
                width: 180,
                height: 400,
                padding: 2,
                paddingLeft: 5,
              },
            }}
          >
            <Paper elevation={7}>
              <form onSubmit={editUser}>
                <label>Name:</label>
                <input
                  value={name}
                  onChange={(evt) => setName(evt.target.value)}
                  placeholder={user.name}
                  required
                />
                <br></br>
                <br></br>
                <label>Email:</label>
                <input
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  placeholder={user.email}
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
                <br></br>
                <br></br>
                <label>Phone:</label>
                <input
                  value={phone}
                  onChange={(evt) => setPhone(evt.target.value)}
                  placeholder={user.phone}
                  required
                />
                <br></br>
                <br></br>
                <label>Street Address:</label>
                <input
                  value={street_address}
                  onChange={(evt) => setStreet(evt.target.value)}
                  placeholder={user.street_address}
                  required
                />
                <br></br>
                <br></br>
                <label>Zip Code:</label>
                <input
                  value={zip}
                  onChange={(evt) => setZip(evt.target.value)}
                  placeholder={user.zip}
                  required
                />
                <br></br>
                <br></br>
                <label>City:</label>
                <input
                  value={city}
                  onChange={(evt) => setCity(evt.target.value)}
                  placeholder={user.city}
                  required
                />
                <br></br>
                <br></br>
                <label>State:</label>
                <input
                  value={state}
                  onChange={(evt) => setState(evt.target.value)}
                  placeholder={user.state}
                  required
                />
                <br></br>
                <button type="submit">Submit</button>
              </form>
            </Paper>
          </Box>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUser;
