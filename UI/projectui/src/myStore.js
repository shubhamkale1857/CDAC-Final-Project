import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loggedReducer from "./isLoggedSlice";

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, loggedReducer);

export const store = configureStore({
        reducer:{
            logged: persistedReducer
        }
});

export const persistor = persistStore(store);