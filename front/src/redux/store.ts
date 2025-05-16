import { configureStore } from '@reduxjs/toolkit';
import { citySlice } from '../features/citySlice';
import { regionSlice } from '../features/regionSlice';


export const store = configureStore({

  reducer: {
    city: citySlice.reducer,
    obl: regionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;