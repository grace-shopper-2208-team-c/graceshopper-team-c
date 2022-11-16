import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts, fetchProducts } from '../products/productsSlice';
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

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
              <TableCell scope="header"></TableCell>
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
                <TableCell scope="row">
                  <Button
                    sx={{ width: 100 }}
                    variant="outlined"
                    color="secondary"
                    target="_blank"
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminProducts;
