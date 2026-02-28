import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, price, qty }
};

function findIndex(items, id) {
  return items.findIndex((i) => i.id === id);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const p = action.payload; // {id,name,price}
      const idx = findIndex(state.items, p.id);
      if (idx === -1) state.items.push({ ...p, qty: 1 });
      else state.items[idx].qty += 1;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const idx = findIndex(state.items, id);
      if (idx === -1) return;
      const safeQty = Math.max(1, Math.min(99, Number(qty) || 1));
      state.items[idx].qty = safeQty;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;