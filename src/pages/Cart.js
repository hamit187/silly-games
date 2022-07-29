import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Cart.module.scss";
import Product from "../components/Product";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartData = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartIsEmpty = cartQuantity === 0;

  const buyItemsHandler = () => {
    alert('Payment successfull!');
    dispatch(cartActions.resetCart());
  };


  return (
    <Fragment>
      <div className={classes.cart}>
        <h2>Selected items</h2>
        <div className={classes.product}>
          {cartIsEmpty ? (
            <p>NO ITEMS SELECTED</p>
          ) : (
            cartData.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          )}
        </div>
        {!cartIsEmpty && (
          <h2 className={classes.cart__total}>Total price: ${totalPrice}</h2>
        )}
          <button
            className={classes.cart__button}
            disabled={cartIsEmpty}
            onClick={buyItemsHandler}
          >
            Buy
          </button>
      </div>
    </Fragment>
  );
};

export default Cart;
