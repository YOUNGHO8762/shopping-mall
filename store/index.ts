import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import cartSlice from './cart-slice';

const createStore = () => {
  const store = configureStore({
    reducer: { cart: cartSlice.reducer },
  });
  return store;
};

const wrapper = createWrapper(createStore);

export default wrapper;
