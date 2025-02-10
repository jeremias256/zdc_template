import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';

import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

export const registerUserWithEmailPassword = async ({
	name,
	email,
	password,
}) => {
	try {
		const response = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password,
		);
		console.log('👀 - response:', response);
		const { uid, photoURL } = response.user;
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};
