import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoSlicer from './todoSlicer';

export const store = configureStore({
  reducer: todoSlicer,

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
