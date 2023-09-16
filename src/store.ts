import { configureStore } from '@reduxjs/toolkit';
import authReducer from './services/auth.service';
import productReducer from './services/product.service';
export const store = configureStore({
   reducer: {
      [authReducer.reducerPath]: authReducer.reducer,
      [productReducer.reducerPath]: productReducer.reducer
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authReducer.middleware, productReducer.middleware])
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
