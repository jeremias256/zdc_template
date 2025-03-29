export const Box = ({ title, children }) => {
	return (
		<div className='pt-4 px-4 pb-6 rounded-xl bg-white'>
			<h2 className='font_18_700 text-primary border-b-2 border-primary pb-3'>
				{title}
			</h2>
			{children}
		</div>
	);
};
