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
			<header className='bg-secondary px-2'>
				<nav className='flex items-end justify-between gap-2'>
					<div className='flex gap-1 items-end'>
						<p className='text-warning text-logo leading-none'>Fit</p>
						<p className='ml-2 text-lg text-info font-bold leading-none'>
							Residential
						</p>
						<SeparadorV
							bg='bg-text'
							h='h-5'
							mx='mx-1'
						/>
						<p className='text-lg text-info text-bold font-bold leading-none'>
							Corporate
						</p>
						<SeparadorV
							bg='bg-text'
							h='h-5'
							mx='mx-1'
						/>
						<p className='text-lg text-info text-bold font-bold leading-none'>
							Rural
						</p>
					</div>
					<button
						onClick={handleClick}
						type='button'>
						{open ? (
							<FontAwesomeIcon
								className='text-info'
								icon={faBars}
								size='xl'
							/>
						) : (
							<FontAwesomeIcon
								className='text-info'
								icon={faX}
								size='xl'
							/>
						)}
					</button>
				</nav>
			</header>
			<main className='bg-secondary pt-4 px-2 pb-6'>
				<div className='bg-primary rounded-2xl flex items-center justify-center flex-col'>
					<h2 className='mt-4 text-base text-text font-bold'>
						Hello! Welcome to
					</h2>
					<h2 className='text-base text-success font-extrabold'>ZDC Fit</h2>

					<form className='mt-8 flex flex-col items-center justify-center gap-8'>
						<fieldset className='relative'>
							<label
								className='text-xs italic text-info absolute top-[-12px] bg-primary px-2 ml-2'
								htmlFor='customerNumber'>
								customer id
							</label>
							<input
								className='top-0 text-info rounded-2xl bg-white h-[48px] pl-3 pt-3 focus:outline-none focus:border-2 focus:border-info min-w-[300px]'
								id='customerNumber'
								type='text'
							/>
							<p className='text-xs text-center hover:outline text-info'>
								I don t know my customer number
							</p>
						</fieldset>

						<fieldset className='relative'>
							<label
								className='text-xs italic text-info absolute top-[-12px] bg-primary px-2 ml-2'
								htmlFor='password'>
								password
							</label>
							<input
								className='top-0 text-info rounded-2xl bg-white h-[48px] pl-3 pt-3 focus:outline-none focus:border-2 focus:border-info min-w-[300px]'
								id='password'
								type='text'
							/>
							<p className='text-xs text-center hover:outline text-info'>
								I forgot my password
							</p>
						</fieldset>
					</form>
				</div>
			</main>
			<footer className='bg-info px-2'>footer</footer>
		</div>
	);
};
