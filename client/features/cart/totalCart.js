import {useSelector} from 'react-redux';

const cart = useSelector((state) => state.cart)
const getTotal = () => {
  let totalQuantity = 0
  let totalPrice = 0
  cart.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += item.price * item.quantity
  })
  return {totalPrice, totalQuantity}
};

return (
    <p className="total__p">
        total ({getTotal().totalQuantity} products) 
        : <strong>${getTotal().totalPrice}</strong>
    </p>
);