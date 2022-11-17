import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, TextField, Button, Box } from '@mui/material';
import { addProduct } from '../products/productsSlice';
import Paper from '@mui/material/Paper';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(
    'https://s0.as-img.com/r/pic/lykke/500/500/drawing.png?u=1537641865'
  );
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addProduct({
        name,
        description,
        image,
        price,
        quantity,
        category,
      })
    );
    setName('');
    setDescription('');
    setImage(
      'https://s0.as-img.com/r/pic/lykke/500/500/drawing.png?u=1537641865'
    );
    setPrice('');
    setQuantity('');
    setCategory('');
  }

  return (
    <Paper
      elevation={6}
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          padding: 3,
        },
      }}
    >
      <div
        className="App"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div>
          <Typography variant="h5">Add New Product</Typography>
        </div>

        <form onSubmit={handleSubmit}>
          <TextField
            style={{ width: 300, margin: 5 }}
            type="text"
            label="Name"
            value={name}
            variant="outlined"
            onChange={(evt) => setName(evt.target.value)}
            required
          />
          <TextField
            style={{ width: 300, margin: 5 }}
            type="text"
            label="Description"
            value={description}
            variant="outlined"
            onChange={(evt) => setDescription(evt.target.value)}
            required
          />
          <br />
          <TextField
            style={{ width: 300, margin: 5 }}
            type="text"
            label="Image Link"
            //   value={image}
            variant="outlined"
            onChange={(evt) => setImage(evt.target.value)}
          />
          <TextField
            style={{ width: 300, margin: 5 }}
            type="number"
            label="Price"
            value={price}
            variant="outlined"
            onChange={(evt) => setPrice(evt.target.value)}
            required
          />
          <br />
          <TextField
            style={{ width: 300, margin: 5 }}
            type="number"
            label="Quantity"
            value={quantity}
            variant="outlined"
            onChange={(evt) => setQuantity(evt.target.value)}
            required
          />
          <TextField
            style={{ width: 300, margin: 5 }}
            type="text"
            label="Category"
            value={category}
            variant="outlined"
            onChange={(evt) => setCategory(evt.target.value)}
            required
          />
          <br />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: 250 }}
            >
              Add
            </Button>
            <br></br>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => {
                setName('');
                setDescription('');
                // setImage('');
                setPrice('');
                setQuantity('');
                setCategory('');
                console.log('clear');
              }}
              sx={{ width: 250 }}
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default AddProduct;
