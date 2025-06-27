import { configureStore } from "@reduxjs/toolkit";
import  dataReducer  from "./features/Data/DataSlice";

export const store = configureStore({
    reducer:{
        data:dataReducer,
    },
})
