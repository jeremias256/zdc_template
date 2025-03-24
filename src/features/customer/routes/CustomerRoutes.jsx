import {
	Billing,
	Contact,
	CustomerLayout,
	HomeZDC,
	Service,
	Support,
} from 'customer';
import { Route, Routes } from 'react-router';

export const CustomerRoutes = () => {
	return (
		<Routes>
			<Route element={<CustomerLayout />}>
				<Route
					element={<Billing />}
					path='/billing'
				/>
				<Route
					element={<Contact />}
					path='/contact'
				/>
				<Route
					index
					element={<HomeZDC />}
					path='/home'
				/>
				<Route
					element={<Service />}
					path='/service'
				/>
				<Route
					element={<Support />}
					path='/support'
				/>
			</Route>
		</Routes>
	);
};
