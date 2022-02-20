import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
}

export interface CartProperty {
  items: Product[];
  totalQuantity: number;
  totalPrice: number;
  addCart?: (action: Product) => void;
  removeCart?: (action: number) => void;
}

const initialState: CartProperty = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      const { id, title, price, image } = action.payload;

      state.totalQuantity += 1;
      state.totalPrice = +(state.totalPrice + price).toFixed(2);

      const item = state.items.find((item) => item.id === id);

      item
        ? item!.quantity!++
        : state.items.push({ id, title, price, image, quantity: 1 });
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      state.items.splice(
        state.items.findIndex((item) => item.id === action.payload),
        1
      );

      state.totalQuantity -= item!.quantity!;
      state.totalPrice -= +(item!.quantity! * item!.price!).toFixed(2);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      item!.quantity!++;
      state.totalQuantity += 1;
      state.totalPrice = +(state.totalPrice + item!.price).toFixed(2);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item!.quantity! !== 1) {
        item!.quantity! -= 1;
        state.totalQuantity -= 1;
        state.totalPrice = +(state.totalPrice - item!.price).toFixed(2);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
