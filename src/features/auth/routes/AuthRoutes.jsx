import { AuthLayout, Login, SignUp } from 'auth';
import { Route, Routes } from 'react-router';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route
					index
					element={<Login />}
					path='/login'
				/>
				<Route
					element={<SignUp />}
					path='/signup'
				/>
			</Route>
		</Routes>
	);
};
