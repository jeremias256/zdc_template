import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faStar, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const Header = () => {
	const [open, setOpen] = useState(true);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<header className='bg-secondary h-[78px] flex items-center'>
			<nav className='max-w-[1280px] px-2 py-2 mx-auto flex items-end justify-between gap-2 w-full desktop:px-0'>
				<div className='flex gap-1 laptop:gap-8 items-center'>
					<div className='flex items-center justify-center'>
						<p className='text-text text-logo leading-none font-bold'>ST</p>
						<FontAwesomeIcon
							className='text-primary'
							icon={faStar}
							size='xl'
						/>
					</div>
					<p className='ml-2 font_16_400 text-primary hover:underline laptop:ml-8'>
						Residential
					</p>

					<p className='font_16_400 text-custom-medium-blue hover:underline'>
						Corporate
					</p>

					<p className='font_16_400 text-custom-light-blue hover:underline'>
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
				<div className='items-center gap-4 hidden laptop:flex'>
					<p className='ml-2 font_16_400 text-primary hover:underline'>
						Customer Area
					</p>
					<p className='ml-2 font_16_400 text-primary hover:underline'>Sales</p>
					<button
						className='w-[36px] h-[36px] bg-text rounded-full text-white hover:bg-secondary hover:text-success'
						type='button'>
						<FontAwesomeIcon
							icon={faWhatsapp}
							size='xl'
						/>
					</button>
				</div>
			</nav>
		</header>
	);
};
