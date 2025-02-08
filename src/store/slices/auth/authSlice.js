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
		login: (state, action) => {},
		logout: (state, payload) => {},
		chekingCredentials: (state, payload) => {},
	},
});
export const { login, logout, chekingCredentials } = authSlice.actions;
