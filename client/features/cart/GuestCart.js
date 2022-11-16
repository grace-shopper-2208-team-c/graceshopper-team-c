import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { allProducts, fetchProducts } from '../products/productsSlice'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const GuestCart = () => {

    const guestCart = JSON.parse(localStorage.getItem('cart')) || ['No Cart'];
    const [cart, setCart] = useState(guestCart);

    const dispatch = useDispatch();
    const products = useSelector(allProducts);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    let subTotal = 0;
    const addTotal = (p) => {
        subTotal = subTotal + p
    }

    let incQuantity = (id) => {
        for (let i = 0; i < cart.length; i++) {
            if (id == cart[i].productId) {
                cart[i].quantity++
            }
        }
        setCart([...cart]);
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const decQuantity = (id) => {
        for (let i = 0; i < cart.length; i++) {
            if (id == cart[i].productId) {
                cart[i].quantity--
            }
        }
        setCart([...cart]);
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const ordersMap = cart.map((CartItem) => {

        // check to see if there is a local storage cart. if not, return message letting user know cart is empty
        if (CartItem == 'No Cart') {
            return (
                <h3 style={{ marginLeft: "10px" }}>Shopping cart is empty.</h3>
            )
        }
        else {

            // Function to take the guest cart item's product id and find the actual product for display information
            let singleProduct = (val) => {
                for (let i = 0; i < products.length; i++) {
                    if (products[i].id == CartItem.productId) {
                        if (val === 'name') {
                            return products[i].name
                        }
                        if (val === 'image') {
                            return products[i].image
                        }
                    }
                }
            }

            return (
                <div className='guestCartItem'>
                    {/* Get the subtotal */}
                    {addTotal(CartItem.price * CartItem.quantity)}

                    {/* Each individual cart item */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: "center",
                            alignItems: "center",
                            '& > :not(style)': {
                                m: 1,
                                width: '95%',
                                padding: 3,
                            },
                        }}
                    >
                        <Paper elevation={3}>
                            <img src={singleProduct('image')} className="cartImage"></img>
                            <h3>{singleProduct('name')}</h3>
                            <p>Quantity: <button onClick={() => incQuantity(CartItem.productId)}>+</button> {CartItem.quantity} <button onClick={() => decQuantity(CartItem.productId)}>-</button></p>
                            <p>Price: ${CartItem.price}</p>
                        </Paper>
                    </Box>
                </div>

            )
        }
    });

    return (
        <div className="guestCartHolder">
            <h1 align="center">Cart</h1>
            {ordersMap}
            <div className="guestCartButtons" align="center">
                <h2 style={{ marginLeft: "10px" }}>Subtotal: ${subTotal.toFixed(2)}
                    <Button
                        variant="outlined"
                        size="medium"
                        sx={{ m: 2 }}
                    >Checkout as Guest</Button>
                    <Link to="/products"><Button
                        variant="outlined"
                        size="medium"
                    >Keep Shopping</Button></Link>
                </h2>
            </div>
        </div>

    )
};

export default GuestCart
