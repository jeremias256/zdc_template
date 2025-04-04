export const CustomCheckbox = ({ label = '', checked, onChange }) => {
	return (
		<label className='inline-flex items-center cursor-pointer'>
			<input
				type='checkbox'
				className='hidden'
				checked={checked}
				onChange={onChange}
			/>
			<span
				className={`w-6 h-6 border-2 rounded flex items-center justify-center 
        ${checked ? 'bg-text border-text' : 'border-text'}`}>
				{checked && (
					<svg
						className='w-6 h-6 text-white'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</svg>
				)}
			</span>
			{label && <span className='ml-2 text-gray-700'>{label}</span>}
		</label>
	);
};
