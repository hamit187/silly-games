import { useDispatch } from 'react-redux';

import { cartActions } from '../store/cart-slice';
import classes from './Product.module.scss';

const Product = (props) => {
    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch(cartActions.addItem({id: props.id, name: props.name, price: props.price}));
    };

    const decreaseHandler = () => {
        dispatch(cartActions.removeItem({id: props.id, price: props.price}));
    };

  return (
    <div className={classes.product}>
      <p>{props.name}</p>
      <p>Quantity: {props.quantity}</p>
      <p>Price: ${props.price}</p>
      <div className={classes.btn}>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
      </div>
    </div>
  );
};

export default Product;
