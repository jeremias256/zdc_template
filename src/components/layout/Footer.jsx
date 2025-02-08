import {
	faLinkedin,
	faTwitter,
	faWhatsapp,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
	return (
		<footer className='bg-text px-2 py-4 flex flex-col items-center'>
			<div className='flex flex-col items-center gap-4'>
				<p className='font-inter text-white text-logo leading-none'>ST</p>
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
				<div className='flex flex-col gap-4 laptop:flex-row'>
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
				<div className='flex flex-col gap-4 laptop:flex-row'>
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
	);
};
