import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authSlice from "../features/Auth/authSlice";


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth:authSlice.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: false
})


setupListeners(store.dispatch)