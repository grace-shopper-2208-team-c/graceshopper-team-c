import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllUsers, fetchAllUsers } from './usersSlice';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const AdminHome = () => {
  const users = useSelector(showAllUsers);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Admin Page</h1>
      </div>
      <div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > :not(style)': {
              m: 1,
              padding: 4,
            },
          }}
        >
          <Paper elevation={8}>
            <div style={{ margin: 10, width: 200 }}>
              <Link to="/admin/users">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ width: 200 }}
                >
                  Users
                </Button>
              </Link>
            </div>
            <div style={{ margin: 10 }}>
              <Link to="/admin/products">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ width: 200 }}
                >
                  Products
                </Button>
              </Link>
            </div>
            <div style={{ margin: 10 }}>
              <Link to="/admin/orders">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ width: 200 }}
                >
                  Orders
                </Button>
              </Link>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default AdminHome;
