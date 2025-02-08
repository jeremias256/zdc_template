import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';

export const CustomInput = ({
	help = false,
	label = false,
	name,
	placeholder = '',
	type = 'text',
	...props
}) => {
	console.log('👀 - props:', props);
	return (
		<fieldset className='relative flex flex-col items-center'>
			<input
				autoComplete='nope'
				className='peer top-0 text-text rounded-tr-2xl rounded-b-2xl bg-secondary h-12 pl-3 pt-3 focus:outline-none focus:border-2 focus:border-secondary min-w-[300px] font-inter'
				id={name}
				name={name}
				placeholder={placeholder}
				type={type}
			/>
			{label && (
				<label
					className='text-xs italic text-text rounded-t-2xl absolute top-[-16px] bg-secondary px-2 ml-2 -left-2 font-inter  peer-focus:text-primary'
					htmlFor={name}>
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
