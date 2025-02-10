import { registerUserWithEmailPassword, signInWithGoogle } from 'fb';

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
		// console.log('👀 - startGoogleSignIn - response:', response);
		if (!response.ok)
			return dispatch(logout({ errorMessage: response.errorMessage }));

		dispatch(login(response));
	};
};

export const startCreatingUserWithEmailPassword = (name, email, password) => {
	return async dispatch => {
		dispatch(chekingCredentials());
		const response = await registerUserWithEmailPassword({
			name,
			email,
			password,
		});
		console.log('👀 - response:', response);
	};
};
