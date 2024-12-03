// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // Adjust path as needed

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
