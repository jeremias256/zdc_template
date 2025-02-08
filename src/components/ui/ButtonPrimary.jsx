export const ButtonPrimary = ({ type }) => {
	return (
		<button
			className='h-9 rounded-2xl border-[1px] w-full max-w-32 text-text font-bold bg-secondary hover:text-primary'
			type={type}>
			LOGIN
		</button>
	);
};
