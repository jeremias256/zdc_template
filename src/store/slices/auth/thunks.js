import {
	loginWithEmailPassword,
	logoutFirebase,
	registerUserWithEmailPassword,
	signInWithGoogle,
} from 'fb';

import { chekingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = (id, password) => {
	return async dispatch => {
		dispatch(chekingCredentials());
	};
};

export const startGoogleSignIn = (id, password) => {
	return async dispatch => {
		dispatch(chekingCredentials());

		const response = await signInWithGoogle();
		if (!response.ok)
			return dispatch(logout({ errorMessage: response.errorMessage }));

		dispatch(login(response));
	};
};

export const startCreatingUserWithEmailPassword = (
	displayName,
	email,
	password,
) => {
	return async dispatch => {
		dispatch(chekingCredentials());
		const { ok, uid, photoURL, errorMessage } =
			await registerUserWithEmailPassword({
				displayName,
				email,
				password,
			});
		// console.log('👀 - errorMessage:', errorMessage);
		if (!ok) return dispatch(logout({ errorMessage }));

		dispatch(
			login({
				displayName,
				email,
				photoURL,
				uid,
				errorMessage: 'User created',
			}),
		);
	};
};

export const startLoginWithEmailPassword = (email, password) => {
	return async dispatch => {
		dispatch(chekingCredentials());
		const response = await loginWithEmailPassword({ email, password });
		if (!response.ok)
			return dispatch(logout({ errorMessage: response.errorMessage }));

		dispatch(login(response));
	};
};

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebase();
	};
};
