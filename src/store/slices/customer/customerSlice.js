import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
	name: 'customer',
	initialState: {
		status: {},
		isLoadingStatus: false
	},
	reducers: {
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		startLoadingStatus: (state, action) => {
			state.isLoadingStatus = action.payload;
		}
	},
});
export const { setStatus, startLoadingStatus } = customerSlice.actions;
