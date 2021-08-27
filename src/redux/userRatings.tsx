/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {} as { [key: string]: number };

const userRatingsSlice = createSlice({
  name: 'userRatings',
  initialState,
  reducers: {
    setUserRating: (state, action) => {
      state[action.payload.id] = action.payload.rating;
    },
    hydrateUserRatings: (_, action: PayloadAction<{ [key: string]: number }>) => action.payload,
  },
});

export const { setUserRating, hydrateUserRatings } = userRatingsSlice.actions;
export default userRatingsSlice.reducer;
