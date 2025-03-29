import { Box, Loader, StatusCustomer } from 'components';
import { useSelector } from 'react-redux';

export const HomeZDC = () => {
	const { isLoadingStatus, status } = useSelector(state => state.customer);
	return (
		<main className='flex flex-col basis-2/3 gap-4 items-center'>
			{isLoadingStatus ? (
				<Loader />
			) : (
				<Box title='ACCOUNT STATUS'>
					<StatusCustomer status={status} />
				</Box>
			)}
		</main>
	);
};
