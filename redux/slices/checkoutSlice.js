import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from '@/redux/slices/cartSlice';
// Helper function to load the initial state from localStorage
const loadInitialState = () => {
  if (typeof window !== "undefined") {
    const savedState = localStorage.getItem("checkout");
    if (savedState) {
      return JSON.parse(savedState);
    }
  }
  return {
    currentStep: 1,
    checkoutFormData: {},
  };
};

const initialState = loadInitialState();

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
      saveStateToLocalStorage(state); // Save to localStorage on change
    },
    updateCheckoutFormData: (state, action) => {
      state.checkoutFormData = {
        ...state.checkoutFormData,
        ...action.payload,
      };
      saveStateToLocalStorage(state); // Save to localStorage on change
    },
  },
});

// Helper function to save state to localStorage
const saveStateToLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("checkout", JSON.stringify(state));
  }
};

export const { setCurrentStep, updateCheckoutFormData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
