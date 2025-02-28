import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../../features/auth/slice/authSlice";
import categoryReducer from "../../features/admin/slice/categorySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
