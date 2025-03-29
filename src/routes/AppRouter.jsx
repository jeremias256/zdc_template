import { AuthRoutes, useCheckAuth } from 'auth';
import { CustomerRoutes } from 'customer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

export const AppRouter = () => {
	const status = useCheckAuth();

	return (
		<BrowserRouter>
			<Routes>
				{status === 'authenticated' ? (
					<>
						<Route
							element={<CustomerRoutes />}
							path='/customer/*'
						/>
						<Route
							path='*'
							element={<Navigate to='/customer/home' />}
						/>
					</>
				) : (
					<>
						<Route
							index
							element={<AuthRoutes />}
							path='/auth/*'
						/>
						<Route
							path='*'
							element={<Navigate to='/auth/login' />}
						/>
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
};
