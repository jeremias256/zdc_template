import { Footer, Header } from 'components';
import { Outlet } from 'react-router';

export const AuthLayout = () => {
	return (
		<div className='grid grid-rows-[auto 1fr auto] min-h-screen bg-gradient-to-r from-custom-light-blue via-primary to-custom-dark-blue'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
