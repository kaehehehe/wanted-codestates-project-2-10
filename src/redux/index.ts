import { search } from './search';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    search: search.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
