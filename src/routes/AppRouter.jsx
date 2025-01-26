import { BrowserRouter, Routes, Route } from 'react-router';
import { Page1 } from 'pages';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Page1 />} />
			</Routes>
		</BrowserRouter>
	);
};
