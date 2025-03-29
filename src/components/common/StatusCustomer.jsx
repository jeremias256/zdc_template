export const StatusCustomer = ({ status }) => {
	return (
		<>
			{status[0]?.status == 'active' && (
				<div className='font_18_400 text-white mt-4 bg-success py-2 px-3 flex justify-center items-center rounded-lg'>
					Your balance is up to date.
				</div>
			)}
			{status[0]?.status == 'suspended' && (
				<div className='font_18_400 text-white mt-4 bg-warning py-2 px-3 flex justify-center items-center rounded-lg'>
					Suspended for non-payment.
				</div>
			)}
			{status[0]?.status == 'pending' && (
				<div className='font_18_400 text-warning mt-4 bg-secondary py-2 px-3 flex justify-center items-center rounded-lg'>
					Pending payment balance.
				</div>
			)}
		</>
	);
};
