import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";
import classes from './Game.module.scss';

const Game = (props) => {
    const dispatch = useDispatch();

    const {id, name, price} = props;

    const addItemHandler = () => {
        dispatch(cartActions.addItem({id, name, price}));
    };

  return (
    <Fragment>
        <div className={classes.game}>
      <h2>{props.name}</h2>
      <img className={classes.game__image} src={require(`../img/${props.image}`)} alt='Game'></img>
      <p>Price: ${props.price}</p>
      <button onClick={addItemHandler}>Add to cart</button>
      </div>
    </Fragment>
  );
};

export default Game;
