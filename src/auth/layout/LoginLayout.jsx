import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SeparadorV } from 'componentsUI';
import { useState } from 'react';

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
						onClick={handleClick}
						type='button'>
						{open ? (
							<FontAwesomeIcon
								className='text-primary'
								icon={faBars}
								size='xl'
							/>
						) : (
							<FontAwesomeIcon
								className='text-primary'
								icon={faX}
								size='xl'
							/>
						)}
					</button>
				</nav>
			</header>
			<main className='pt-4 px-2 pb-6'>
				<div className='bg-secondary rounded-2xl flex items-center justify-center flex-col py-4'>
					<h2 className='mt-4 text-base text-text font-bold'>
						Hello! Welcome to
					</h2>
					<h2 className='text-xl text-warning font-bold'>ZDC Fit</h2>

					<form className='mt-8 flex flex-col items-center justify-center gap-8'>
						<fieldset className='relative'>
							<label
								className='text-xs italic text-text rounded-t-2xl absolute top-[-15px] bg-primary px-2 ml-2 -left-2 font-inter'
								htmlFor='password'>
								customer id
							</label>
							<input
								className='top-0 text-text rounded-tr-2xl rounded-b-2xl bg-white h-12 pl-3 pt-3 focus:outline-none focus:border-2 focus:border-primary min-w-[300px] font-inter'
								id='customerNumber'
								type='text'
							/>
							<p className='text-xs text-center hover:outline text-text mt-2'>
								I don t know my customer number
							</p>
						</fieldset>

						<fieldset className='relative'>
							<label
								className='text-xs italic text-text rounded-t-2xl absolute top-[-15px] bg-primary px-2 ml-2 -left-2 font-inter'
								htmlFor='password'>
								password
							</label>
							<input
								className='top-0 text-text rounded-tr-2xl rounded-b-2xl bg-white h-12 pl-3 pt-3 focus:outline-none focus:border-2 focus:border-primary min-w-[300px] font-inter'
								id='password'
								type='password'
							/>
							<p className='text-xs text-center hover:outline text-text mt-2'>
								I forgot my password
							</p>
						</fieldset>

						<button
							className='h-9 rounded-2xl bg-primary w-full max-w-32 text-text font-bold'
							type='submit'>
							LOGIN
						</button>

						<p className='text-xs text-center hover:outline text-text mt-2'>
							If you re not a customer, get a plan{' '}
							<span className='text-primary underline'>with us</span>
						</p>
					</form>
				</div>
			</main>
			<footer className='bg-info px-2'>footer</footer>
		</div>
	);
};
