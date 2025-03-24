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
				className='focus:border-2 rounded-b-2xl peer min-w-[300px] text-text rounded-tr-2xl bg-secondary h-12 pl-3 pt-3 focus:outline-none top-0 focus:border-secondary font-inter'
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className='mt-2 p-1 rounded-lg text_error'>{meta.error}</div>
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
