import { configureStore } from '@reduxjs/toolkit';
import cheatsheetReducer from './cheatsheet';
import userRatingsReducer from './userRatings';
import ratingApi from './averageRatings';

const store = configureStore({
  reducer: {
    cheatsheet: cheatsheetReducer,
    userRatings: userRatingsReducer,
    [ratingApi.reducerPath]: ratingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ratingApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
