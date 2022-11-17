import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts, fetchProducts } from '../products/productsSlice';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import EditIcon from '@mui/icons-material/Edit';
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
import DeleteProduct from './DeleteProduct';
import AddProduct from './AddProduct';

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <strong style={{ fontSize: 20 }}>Admin Products Page</strong>
      <TableContainer component={Paper} style={{ width: 1200 }}>
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
              <TableCell scope="header">Product Id</TableCell>
              <TableCell scope="header">Name</TableCell>
              <TableCell scope="header">Price (USD)</TableCell>
              <TableCell scope="header">Quantity</TableCell>
              <TableCell
                scope="header"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                Edit / Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              '& tr:nth-of-type(2n+1)': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell scope="row">
                  <Stack direction="column">
                    <div>{product.id}</div>
                  </Stack>
                </TableCell>
                <TableCell scope="row">{product.name}</TableCell>
                <TableCell scope="row">${product.price}</TableCell>
                <TableCell scope="row">{product.quantity}</TableCell>
                <TableCell
                  scope="row"
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <EditIcon
                    sx={{ '&:hover': { color: 'darkgrey', cursor: 'pointer' } }}
                  ></EditIcon>
                  <DeleteProduct id={product.id} />
                </TableCell>
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
      <br></br>
      <br></br>
      <br></br>

      <AddProduct />
    </div>
  );
};

export default AdminProducts;
