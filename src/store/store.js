import { configureStore } from '@reduxjs/toolkit';
import { authSlice, customerSlice } from 'store';

import './slices';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		customer: customerSlice.reducer,
	},
});
