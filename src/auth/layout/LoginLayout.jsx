import {
	faLinkedin,
	faTwitter,
	faWhatsapp,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SeparadorV } from 'componentsUI';
import { useState } from 'react';

import imgBackgroundLogin from '../../assets/login_fondo.jpg';

export const LoginLayout = () => {
	const [open, setOpen] = useState(true);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className='bg-primary'>
			<header className='bg-secondary px-2 py-2'>
				<nav className='flex items-end justify-between gap-2'>
					<div className='flex gap-1 items-end'>
						<p className='text-text text-logo leading-none'>Fit</p>
						<p className='ml-2 text-lg text-text font-bold leading-none'>
							Residential
						</p>
						<SeparadorV
							bg='bg-text'
							h='h-5'
							mx='mx-1'
						/>
						<p className='text-lg text-text text-bold font-bold leading-none'>
							Corporate
						</p>
						<SeparadorV
							bg='bg-text'
							h='h-5'
							mx='mx-1'
						/>
						<p className='text-lg text-text text-bold font-bold leading-none'>
							Rural
						</p>
					</div>
					<button
						className='laptop:hidden'
						onClick={handleClick}
						type='button'>
						{open ? (
							<FontAwesomeIcon
								className='text-text'
								icon={faBars}
								size='xl'
							/>
						) : (
							<FontAwesomeIcon
								className='text-text'
								icon={faX}
								size='xl'
							/>
						)}
					</button>
				</nav>
			</header>
			<main className='pt-4 px-2 pb-6 bg-gradient-to-r from-custom-light-blue via-custom-medium-blue to-custom-dark-blue'>
				<div className='rounded-2xl flex items-center justify-center flex-col py-4 bg-cover bg-center max-w-[540px] tablet:border-2 tablet:border-white mx-auto'>
					<h2 className='mt-4 text-base text-white font-bold laptop:text-xl'>
						Hello! Welcome to
					</h2>
					<h2 className='text-xl text-white font-bold laptop:text-3xl'>
						ZDC Fit
					</h2>

					<form className='mt-8 flex flex-col items-center justify-center gap-8'>
						<fieldset className='relative flex flex-col items-center'>
							<input
								autoComplete='nope'
								className='peer top-0 text-text rounded-tr-2xl rounded-b-2xl bg-secondary h-12 pl-3 pt-3 focus:outline-none focus:border-2 focus:border-secondary min-w-[300px] font-inter'
								id='customerNumber'
								type='text'
							/>
							<label
								className='text-xs italic text-text rounded-t-2xl absolute top-[-16px] bg-secondary px-2 ml-2 -left-2 font-inter  peer-focus:text-custom-medium-blue'
								htmlFor='customerNumber'>
								customer id
							</label>
							<p className=' text-xs text-center hover:underline text-white mt-2 laptop:text-md hover:text-white hover:font-bold'>
								I don't know my customer number
							</p>
						</fieldset>

						<fieldset className='relative flex flex-col items-center'>
							<input
								autoComplete='off'
								className='peer top-0 text-text rounded-tr-2xl rounded-b-2xl bg-secondary	 h-12 pl-3 pt-3 focus:outline-none focus:border-2 focus:border-secondary min-w-[300px] font-inter'
								id='password'
								type='password'
							/>
							<label
								className='text-xs italic text-text rounded-t-2xl absolute top-[-16px] bg-secondary px-2 ml-2 -left-2 font-inter  peer-focus:text-custom-medium-blue'
								htmlFor='password'>
								password
							</label>
							<p className=' text-xs text-center hover:underline text-white mt-2 laptop:text-md hover:text-white'>
								I forgot my password
							</p>
						</fieldset>

						<button
							className='h-9 rounded-2xl bg-gradient-to-r border-[1px] border-white from-custom-pink via-custom-gray to-custom-brown w-full max-w-32 text-white font-bold hover:bg-gray-500'
							type='submit'>
							LOGIN
						</button>

						<p className='text-xs text-center hover:outline laptop:text-lg text-white mt-2 hover:outline-none focus:border-none'>
							If you re not a customer, get a plan{' '}
							<span className='text-center underline hover:text-white'>
								with us
							</span>
						</p>
					</form>
				</div>
			</main>
			<footer className='bg-text px-2 py-4 flex flex-col items-center'>
				<div className='flex flex-col items-center gap-4'>
					<p className='font-inter text-white text-logo leading-none'>Fit</p>
					<div className='flex gap-4'>
						<FontAwesomeIcon
							className='text-white'
							icon={faWhatsapp}
							size='2xl'
						/>
						<FontAwesomeIcon
							className='text-white'
							icon={faTwitter}
							size='2xl'
						/>
						<FontAwesomeIcon
							className='text-white'
							icon={faYoutube}
							size='2xl'
						/>
						<FontAwesomeIcon
							className='text-white'
							icon={faLinkedin}
							size='2xl'
						/>
					</div>
				</div>
				<div className='flex justify-center gap-8 mt-4'>
					<div className='flex flex-col gap-4'>
						<a
							className='font-inter text-white text-base hover:underline'
							href='#'>
							Help Center
						</a>
						<a
							className='font-inter text-white text-base hover:underline'
							href='#'>
							Customer Service
						</a>
						<a
							className='font-inter text-white text-base hover:underline'
							href='#'>
							Work with us
						</a>
						<a
							className='font-inter text-white text-base hover:underline'
							href='#'>
							News
						</a>
					</div>
					<div className='flex flex-col gap-4'>
						<a
							className='font-inter text-white text-base hover:underline'
							href='#'>
							Fit Residential
						</a>
						<a
							className='font-inter text-white text-base hover:underline'
							href='#'>
							Fit Corporate
						</a>
						<a
							className='font-inter text-white text-base hover:underline'
							href='#'>
							Fit Rural
						</a>
					</div>
				</div>
				<div className='h-[1px] my-4 bg-white w-3/4'></div>
				<div className='font-inter text-white'>@2024 FIT</div>
				<div className='mx-auto text-center max-w-[768px]'>
					<span className='font-inter text-white hover:underline'>
						Personal data
					</span>
					<span className='h-2 bg-white px-[1px] mx-1'></span>
					<span className='font-inter text-white hover:underline'>
						Responsible Disclosure Policy
					</span>
					<span className='h-2 bg-white px-[1px] mx-1'></span>
					<span className='font-inter text-white hover:underline'>
						Transparency
					</span>
					<span className='h-2 bg-white px-[1px] mx-1'></span>
					<span className='font-inter text-white hover:underline'>
						Integrity Program
					</span>
					<span className='h-2 bg-white px-[1px] mx-1'></span>
					<span className='font-inter text-white hover:underline'>
						Terms and Conditions
					</span>
					<span className='h-2 bg-white px-[1px] mx-1'></span>
					<span className='font-inter text-white hover:underline'>
						Online Complaint Book
					</span>
					<span className='h-2 bg-white px-[1px] mx-1'></span>
					<span className='font-inter text-white hover:underline'>
						Cancellations
					</span>
				</div>
			</footer>
		</div>
	);
};
