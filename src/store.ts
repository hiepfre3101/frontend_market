import { configureStore } from '@reduxjs/toolkit';
import authReducer from './services/auth.service';
import categoryReducer from './services/cate.service';
import productsReducer from './services/products.service';

export const store = configureStore({
   reducer: {
      [authReducer.reducerPath]: authReducer.reducer,
      [categoryReducer.reducerPath]: categoryReducer.reducer,
      [productsReducer.reducerPath]: productsReducer.reducer
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authReducer.middleware, categoryReducer.middleware, productsReducer.middleware])
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
