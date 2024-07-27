// Create a Slice
// Create reducers
// Export the reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");

const initialState = (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) ||
[];

// const calculateSubtotal = (cart) => {
//   return cart.reduce((total, item) => total + item.salePrice * item.qty, 0);
// };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const { id, title, product_price,discount,discountedPrice, imageUrl, WholesalerProfileId:vendorId } = action.payload;
            // Check if the item already exists in the cart
            const existingItem = state.find((item) => item.id === id);
      
            if (existingItem) {
              // If the item exists, update the quantity
              existingItem.qty += 1;
            } else {
              // If the item doesn't exist, add it to the cart
              const newItem = { id, title, product_price,discount,discountedPrice, qty: 10, imageUrl, vendorId };
              state.push(newItem);
              // Update localStorage with the new state
            }
            if (typeof window !== "undefined") {
              localStorage.setItem("cart", JSON.stringify([...state]));
            }
          },
        removeFromCart: (state, action) => {
            const cartId = action.payload;
            const newState = state.filter((item) => item.id !== cartId);
             // Update localStorage with the new state
             if (typeof window !== "undefined") {
              localStorage.setItem("cart", JSON.stringify(newState));
            }
            return newState;
          },
        incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]))
        };
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 10) {
        cartItem.qty -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]))};
      }
    },
    clearCart: (state) => {
      state.length = 0; // Clear the array
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify([]));
      }
    }
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const { updateCart } = cartSlice.actions;