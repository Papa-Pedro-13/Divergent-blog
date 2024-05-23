import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import articlesSlice from './articles/index';
import { StoreType } from '../utils/types';

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
