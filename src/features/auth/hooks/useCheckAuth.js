import { FirebaseAuth } from 'fb';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { starLoadingCustomer, login, logout } from 'store';

export const useCheckAuth = () => {
	const dispatch = useDispatch();
	const { status } = useSelector(state => state.auth);

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async user => {
			if (!user) return dispatch(logout({ errorMessage: 'logout ok' }));

			const { uid, email, displayName, photoURL } = user;
			dispatch(login({ uid, email, displayName, photoURL }));
			dispatch(starLoadingCustomer());
		});
	}, []);

	return status;
};
