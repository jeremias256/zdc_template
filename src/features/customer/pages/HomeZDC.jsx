export const HomeZDC = () => {
	return (
		<main className='flex flex-col basis-2/3 gap-4'>
			<div className='pt-4 px-4 pb-6 rounded-xl bg-white'>
				<h2 className='font_18_700 text-primary border-b-2 border-primary pb-3'>
					ACCOUNT STATUS
				</h2>
				<div className='font_18_400 text-white mt-4 bg-success py-2 px-3 flex justify-center items-center rounded-lg'>
					Your balance is up to date.
				</div>
			</div>
			<div className='pt-4 px-4 pb-6 rounded-xl bg-white'>
				<h2 className='font_18_700 text-primary border-b-2 border-primary pb-3'>
					ACCOUNT STATUS
				</h2>
				<div className='font_18_400 text-white mt-4 bg-warning py-2 px-3 flex justify-center items-center rounded-lg'>
					Suspended for non-payment.
				</div>
			</div>
			<div className='pt-4 px-4 pb-6 rounded-xl bg-white'>
				<h2 className='font_18_700 text-primary border-b-2 border-primary pb-3'>
					ACCOUNT STATUS
				</h2>
				<div className='font_18_400 text-warning mt-4 bg-secondary py-2 px-3 flex justify-center items-center rounded-lg'>
					Pending payment balance.
				</div>
			</div>
		</main>
	);
};
