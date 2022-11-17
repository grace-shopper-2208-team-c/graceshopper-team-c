import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllUsers, fetchAllUsers } from './usersSlice';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const AdminUsers = () => {
  const users = useSelector(showAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <strong style={{ fontSize: 20 }}>Admin Users Page</strong>
      <TableContainer component={Paper} style={{ width: 900 }}>
        <Table stickyHeader={true}>
          <TableHead
            sx={{
              '& .MuiTableCell-stickyHeader': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            <TableRow>
              <TableCell scope="header">User Id</TableCell>
              <TableCell scope="header">Email</TableCell>
              <TableCell scope="header">Name</TableCell>
              <TableCell scope="header">Username</TableCell>
              <TableCell scope="header">Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              '& tr:nth-of-type(2n+1)': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell scope="row">
                  <Stack direction="column">
                    <div>{user.id}</div>
                  </Stack>
                </TableCell>
                <TableCell scope="row">{user.email}</TableCell>
                <TableCell scope="row">{user.name}</TableCell>
                <TableCell scope="row">{user.username}</TableCell>
                <TableCell scope="row">{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <Link to="/admin">
        <KeyboardReturnIcon
          style={{
            fontSize: 50,
            textDecoration: 'none',
            color: 'black',
          }}
        />
      </Link>
    </div>
  );
};

export default AdminUsers;
