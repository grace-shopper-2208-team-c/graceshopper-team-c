import { incrementQuantity, decrementQuantity, removeItem} from './cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({id, name, image, price, quantity=0}) {
    const dispatch = useDispatch()
    return (
      <div className="cartItem">
        <img className="cartItem__image" src={image} alt='item'/>
          <p className="cartItem__name">{name}</p>
          <p className="cartItem__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='cartItem__incrDec'>
            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <p>{quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
          </div>
          <button
            className='cartItem__removeButton' 
            onClick={() => dispatch(removeItem(id))}>
              Remove
          </button>
        </div>
  
    );
  };

  export default CartItem;
