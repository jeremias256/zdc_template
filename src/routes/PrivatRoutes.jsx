/* -------------------------------------------- libs -------------------------------------------- */
import Cookies from 'js-cookie';
/* ----------------------------------------- react redux ---------------------------------------- */
import { useSelector } from 'react-redux';
/* ---------------------------------------- react router ---------------------------------------- */
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
	const cookiePHP = Cookies.get('PHPSESSID');
	const { isAuthenticated } = useSelector(state => state.auth);

	return isAuthenticated || cookiePHP ? children : <Navigate to='/' />;
};
