import React, { Fragment, useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchCartData, sendCartData } from "./store/thunks/cart-thunk";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";

let initialRender = true;

const Browse = React.lazy(() => import('./pages/Browse'));

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if(initialRender){
      initialRender = false;
      return;
    }
    
    if(cart.changed){
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loader />} >
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/silly-games/">
          <Redirect to={"/home"}/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
