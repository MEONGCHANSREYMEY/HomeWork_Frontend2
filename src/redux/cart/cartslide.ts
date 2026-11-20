import { CartInfer } from '@/src/lib/cart/cart-type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ItemInfer extends CartInfer {
  quantity: number;
  totalPrice: number;
}

type CartState = {
  totalAmount: number;
  totalQuantity: number;
  items: ItemInfer[];
};

const initialState: CartState = {
  totalAmount: 0,
  totalQuantity: 0,
  items: [],
};


const round = (value: number) => Math.round(value * 100) / 100;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add ONE of this product to the cart
    addToCart: (state, action: PayloadAction<CartInfer>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.totalAmount = round(state.totalAmount + newItem.price);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = round(existingItem.totalPrice + newItem.price);
      }
    },

    
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return; 

      state.totalQuantity--;
      state.totalAmount = round(state.totalAmount - existingItem.price);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = round(existingItem.totalPrice - existingItem.price);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;