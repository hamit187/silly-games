import { Fragment } from "react";

const CartItem = (props) => {
    return <Fragment>
        <h2>Item name: {props.name}</h2>
        <h3>Quantity: {props.quantity}</h3>
    </Fragment>
};

export default CartItem;