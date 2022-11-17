import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../products/productsSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteProduct = (props) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(removeProduct(props.id));
  };

  return (
    <DeleteIcon
      sx={{ '&:hover': { color: 'darkgrey', cursor: 'pointer' } }}
      onClick={handleDelete}
    ></DeleteIcon>
  );
};

export default DeleteProduct;
