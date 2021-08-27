import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch as untypedDispatch, useSelector as untypedSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useDispatch: () => AppDispatch = () => untypedDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = untypedSelector;
