import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    totalItems: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
  };

const getLocalCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice(
    {
        name: "cart",
        initialState : getLocalCart(),
        reducers: {
            addItem: (state, action) => {
                const product = action.payload;
          
                const item = state.cartItems.find((i) => i.itemId === product.itemId);
                if (item) {
                  item.amount += product.amount;
                } else {
                  state.cartItems.push(product);
                }
                state.totalItems += parseInt(product.amount);
                state.cartTotal += product.price * product.amount;
                cartSlice.caseReducers.calculateTotals(state);
                toast.success('item added to cart');
              },
              clearCart: (state) => {
                localStorage.setItem('cart', JSON.stringify(defaultState));
                return defaultState;
              },
          
              removeItem: (state, action) => {
                const { itemId } = action.payload;
                const product = state.cartItems.find((i) => i.itemId === itemId);
                state.cartItems = state.cartItems.filter((i) => i.itemId !== itemId);
          
                state.totalItems -= product.amount;
                state.cartTotal -= product.price * product.amount;
                cartSlice.caseReducers.calculateTotals(state);
                toast.error('Item removed from cart');
              },
              editItem: (state, action) => {
                const { itemId, amount } = action.payload;
                const item = state.cartItems.find((i) => i.itemId === itemId);
                state.totalItems += amount - item.amount;
                state.cartTotal += item.price * (amount - item.amount);
                item.amount = amount;
                cartSlice.caseReducers.calculateTotals(state);
                toast.success('Cart updated');
              },
          
              calculateTotals: (state) => {
                state.tax = 0.1 * state.cartTotal;
                state.orderTotal = state.cartTotal + state.shipping + state.tax;
                localStorage.setItem('cart', JSON.stringify(state));
              }
        }
    }
)

export const {clearCart, removeItem, addItem, editItem} = cartSlice.actions;

export default cartSlice.reducer;