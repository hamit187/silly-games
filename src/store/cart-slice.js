import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, totalPrice: 0, changed: false};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    resetCart(state){
        state.items = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
        state.changed = true;
    },
    replaceCart(state, action){
        state.totalQuantity = action.payload.totalQuantity;
        state.totalPrice = action.payload.totalPrice;
        state.items = action.payload.items;
    },
    addItem(state, action){
        state.totalQuantity++;
        state.changed = true;
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        if(!existingItem){
            state.items.push({
                id: newItem.id,
                name: newItem.name,
                price: newItem.price,
                quantity: 1
            });
            state.totalPrice = state.totalPrice + newItem.price;
            return;
        }
        existingItem.quantity++;
        state.totalPrice = state.totalPrice + existingItem.price;
    },
    removeItem(state, action){
        state.totalQuantity--;
        state.changed = true;
        const product = action.payload;
        const existingItem = state.items.find(item => item.id === product.id);
        state.totalPrice = state.totalPrice - existingItem.price;
        if(existingItem.quantity === 1){
            state.items = state.items.filter(item => item.id !== product.id);
        }else {
            existingItem.quantity--;
        }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;