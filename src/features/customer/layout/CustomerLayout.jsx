import {
	faBars,
	faEnvelope,
	faEnvelopeOpen,
	faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer, Header } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { Outlet } from 'react-router';
import { startLogout } from 'store';

export const CustomerLayout = () => {
	const [message, setMessage] = useState(false);
	const [open, setOpen] = useState(true);
	const dispatch = useDispatch();
	const handleClick = () => {
		setOpen(!open);
	};
	const readMessage = () => {
		setMessage(prev => !prev);
	};
	return (
		//grid grid-rows-[auto 1fr auto] min-h-screen
		<div className='flex flex-col bg-secondary min-h-screen'>
			<Header />
			<div className='flex flex-col justify-center'>
				<div className='bg-gradient-to-r from-custom-light-blue via-primary to-custom-dark-blue'>
					<nav className='h-10 flex items-center px-2 justify-between max-w-[1280px] mx-auto'>
						<button
							className='laptop:hidden'
							onClick={handleClick}
							type='button'>
							{open ? (
								<FontAwesomeIcon
									className='text-secondary'
									icon={faBars}
									size='xl'
								/>
							) : (
								<FontAwesomeIcon
									className='text-secondary'
									icon={faX}
									size='xl'
								/>
							)}
						</button>
						<h2 className='font_16_400 text-secondary'>
							Jeremias Menacho - 123456789
						</h2>
						<button
							onClick={readMessage}
							type='button'>
							{message ? (
								<FontAwesomeIcon
									className='text-secondary'
									icon={faEnvelopeOpen}
									size='xl'
								/>
							) : (
								<FontAwesomeIcon
									className='text-secondary'
									icon={faEnvelope}
									size='xl'
								/>
							)}
						</button>
					</nav>
				</div>
				<section className='flex flex-col laptop:flex-row w-full gap-8 px-4 my-4 desktop:px-0 desktop max-w-[1280px] mx-auto'>
					<div className='flex flex-col gap-1 basis-1/3 bg-secondary'>
						<NavLink
							className={({ isActive, isPending }) =>
								`${isPending ? 'pending' : isActive ? 'active' : 'text-text'} font_16_400 pl-16 text-left hover:text-primary py-1`
							}
							to='/customer/home'>
							HOME
						</NavLink>
						<NavLink
							className={({ isActive, isPending }) =>
								`${isPending ? 'pending' : isActive ? 'text-primary' : 'text-text'} font_16_400 pl-16 text-left hover:text-primary py-1`
							}
							to='/customer/contact'>
							CONTACTS
						</NavLink>
						<NavLink
							className={({ isActive, isPending }) =>
								`${isPending ? 'pending' : isActive ? 'text-primary' : 'text-text'} font_16_400 pl-16 text-left hover:text-primary py-1`
							}
							to='/customer/service'>
							MY SERVICES
						</NavLink>
						<NavLink
							className={({ isActive, isPending }) =>
								`${isPending ? 'pending' : isActive ? 'text-primary' : 'text-text'} font_16_400 pl-16 text-left hover:text-primary py-1`
							}
							to='/customer/billing'>
							BILLING
						</NavLink>
						<NavLink
							className={({ isActive, isPending }) =>
								`${isPending ? 'pending' : isActive ? 'active' : 'text-text'} font_16_400 pl-16 text-left hover:text-primary py-1`
							}
							to='/customer/support'>
							TECHNICAL SUPPORT
						</NavLink>
						<button
							className='font_16_400 text-text pl-16 text-left border-t-2 border-primary hover:text-primary py-1'
							onClick={() => dispatch(startLogout())}
							type='button'>
							LOG OUT
						</button>
					</div>
					<Outlet />
				</section>
			</div>
			<Footer />
		</div>
	);
};
