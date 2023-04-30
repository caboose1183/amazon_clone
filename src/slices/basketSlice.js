import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// payload info comes in here as whatever is given through dispatch, dispatch and use object destructuring
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      // if id found will return a number 0 or greater at index, -1 if not found
      if (index >= 0) {
        // remove item if exists in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Unable to remove product (id: ${action.payload.id}) as it is not found.`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors, how we pull info from global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
