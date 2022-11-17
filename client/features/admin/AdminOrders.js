import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showAllOrders, fetchCompleteOrders } from './ordersSlice';
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

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(showAllOrders);

  useEffect(() => {
    dispatch(fetchCompleteOrders());
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
      <strong style={{ fontSize: 20 }}>Admin Orders Page</strong>
      <TableContainer component={Paper} style={{ width: 800 }}>
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
              <TableCell scope="header">Order Id</TableCell>
              <TableCell scope="header">Total</TableCell>
              <TableCell scope="header">Status</TableCell>
              <TableCell scope="header">Buyer Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              '& tr:nth-of-type(2n+1)': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell scope="row">
                  <Stack direction="column">
                    <div>{order.id}</div>
                  </Stack>
                </TableCell>
                <TableCell scope="row">${order.total}</TableCell>
                <TableCell scope="row">{order.status}</TableCell>
                <TableCell scope="row">{order.userId}</TableCell>
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

export default Orders;
