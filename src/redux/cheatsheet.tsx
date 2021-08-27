/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPerk: null as Perk | null,
  filter: '',
  filterInputValue: '',
};

const cheatsheetSlice = createSlice({
  name: 'cheatsheet',
  initialState,
  reducers: {
    toggleSelectedPerk: (state, action) => {
      state.selectedPerk = state.selectedPerk?.id === action.payload?.id ? null : action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilterInputValue: (state, action) => {
      state.filterInputValue = action.payload;
    },
  },
});

export const { toggleSelectedPerk, setFilter, setFilterInputValue } = cheatsheetSlice.actions;

export default cheatsheetSlice.reducer;
