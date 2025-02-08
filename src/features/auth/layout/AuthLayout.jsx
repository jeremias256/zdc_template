import { Footer, Header } from 'components';
import { Outlet } from 'react-router';

export const AuthLayout = () => {
	return (
		<div className='bg-primary'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
