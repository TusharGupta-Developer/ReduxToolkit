// import {configureStore} from "@reduxjs/toolkit"
// import { todoSlice } from './../features/todo/todoSlice';

// export const store = configureStore({
//     reducer: todoSlice
// })

// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './../features/todo/todoSlice'; // Ensure this is the correct path

export const store = configureStore({
    reducer: todoReducer,

});

