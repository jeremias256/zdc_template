import { AuthRoutes } from 'auth';
import { HomeZDC } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<AuthRoutes />}
					path='/*'
				/>

				<Route
					element={<HomeZDC />}
					path='/home'
				/>
			</Routes>
		</BrowserRouter>
	);
};
