import { BrowserRouter, Route, Routes } from 'react-router';

import { LoginLayout } from '../auth/layout';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<LoginLayout />}
					path='/'
				/>
			</Routes>
		</BrowserRouter>
	);
};
