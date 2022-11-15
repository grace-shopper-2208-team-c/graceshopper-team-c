import React, {useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchProductByIdAsync, showSingleProduct } from '../products/singleProductSlice'



const GuestCartItem = () => {

    const product = useSelector(showSingleProduct);
const guestCart = JSON.parse(localStorage.getItem('cart'));

const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductByIdAsync(id));
      }, []);

return(
    <>
{guestCart.map((guestCartItem) => (
    <div className='guestCartItem'>
   <p>Product ID: {guestCartItem.productId}</p>
   <p>Quantity: {guestCartItem.quantity}</p>
   <p>Price: ${guestCartItem.price}</p> 
   </div>
  ))}
  </>
)
}

export default GuestCartItem