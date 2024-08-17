import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../slice/counter_slice';

export const store = configureStore({
    reducer:{
        counter : CounterReducer
    }
}) 