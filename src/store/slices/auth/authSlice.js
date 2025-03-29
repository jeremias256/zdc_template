import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: 'not-authenticated', //'checking', 'not-authenticated', 'authenticated'
		uid: null,
		email: null,
		displayName: null,
		photoURL: null,
		errorMessage: null,
	},
	reducers: {
		login: (state, payload) => {
			state.status = 'authenticated';
			state.uid = payload.payload.uid;
			state.displayName = payload.payload.displayName;
			state.photoURL = payload.payload.photoURL;
			state.errorMessage = payload.payload.errorMessage;
		},
		logout: (state, { payload = '' }) => {
			state.status = 'not-authenticated';
			state.email = null;
			state.displayName = null;
			state.photoURL = null;
			state.errorMessage = payload.errorMessage;
		},
		chekingCredentials: (state, payload) => {
			state.status = 'checking';
		},
	},
});
export const { login, logout, chekingCredentials } = authSlice.actions;
