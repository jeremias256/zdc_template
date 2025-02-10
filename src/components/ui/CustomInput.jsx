import { useField } from 'formik';

export const CustomInput = ({ help = false, label = false, ...props }) => {
	const [field, meta] = useField(props);
	// console.log('👀 - props:', props);
	// console.log('👀 - meta:', meta); metadatos
	// console.log('👀 - field:', field); eventos
	return (
		<fieldset className='max-w-[300px] relative flex flex-col items-center'>
			<input
				autoComplete='false'
				className='peer top-0 text-text rounded-tr-2xl rounded-b-2xl bg-secondary h-12 pl-3 pt-3 focus:outline-none focus:border-2 focus:border-secondary min-w-[300px] font-inter'
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className='mt-2 rounded-lg p-1 text_error'>{meta.error}</div>
			) : null}
			{label && (
				<label
					className='text-xs italic text-text rounded-t-2xl absolute top-[-16px] bg-secondary px-2 ml-2 -left-2 font-inter  peer-focus:text-primary'
					htmlFor={props.name}>
					{label}
				</label>
			)}
			{help && (
				<p className='text-xs text-center hover:underline text-white mt-2 laptop:text-md hover:text-white'>
					{help}
				</p>
			)}
		</fieldset>
	);
};
