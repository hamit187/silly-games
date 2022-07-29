import { cartActions } from "../cart-slice";

const url = process.env.REACT_APP_API_KEY;

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed fetching data!");
      }
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
          totalPrice: cartData.totalPrice || 0,
        })
      );
    } catch (error) {
      alert("Failed fetching data!");
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(url,
        {
          method: "PUT",
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};
