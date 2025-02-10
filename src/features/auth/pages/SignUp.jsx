import imgBackgroundLogin from 'assets/login_fondo.png';
import { ButtonPrimary, CustomInput, Loader } from 'components';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { startCreatingUserWithEmailPassword } from 'store';
import * as Yup from 'yup';

export const SignUp = () => {
	const dispatch = useDispatch();
	const { status, errorMessage } = useSelector(state => state.auth);

	const onSubmit = values => {
		console.log('👀 - onSubmit - values:', values);
		dispatch(
			startCreatingUserWithEmailPassword(
				values.name,
				values.email,
				values.password,
			),
		);
	};
	return (
		<main className='py-6 px-2 laptop:py-auto desktop:px-0 laptop:py-16'>
			<div className='max-w-[1280px] flex justify-center gap-[100px] mx-auto'>
				<div className='hidden laptop:block'>
					<img
						alt='login background'
						className='w-full max-w-[460px]'
						src={imgBackgroundLogin}
					/>
				</div>
				<div className='rounded-2xl flex items-center justify-center flex-col p-4 bg-cover bg-center max-w-[540px] tablet:border-2 tablet:border-white'>
					<h2 className='mt-4 text-base text-white font-bold laptop:text-xl'>
						Hello! Welcome to
					</h2>
					<h2 className='text-xl text-white font-bold laptop:text-3xl'>
						ZDC ST
					</h2>

					<Formik
						initialValues={{
							name: 'jeremias menacho',
							email: 'gab.menacho@gmail.com',
							customerId: '123456789',
							password: '1234$Abc',
						}}
						onSubmit={onSubmit}
						validationSchema={Yup.object({
							name: Yup.string()
								.matches(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo se permiten letras')
								.min(2, 'It must have at least 2 characters.')
								.max(50, 'It cannot have more than 50 characters.')
								.required('This field is required'),
							email: Yup.string()
								.email('It must be a valid email.')
								.required('This field is required'),
							customerId: Yup.string()
								.matches(/^\d+$/, 'Solo se permiten números')
								.min(7, 'It must have at least 7 characters.')
								.max(9, 'It cannot have more than 9 characters.')
								.required('This field is required'),
							password: Yup.string()
								.min(8, 'It must have at least 8 characters.')
								.max(12, 'It must have 12 characters or fewer.')
								.matches(
									/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
									'It must contain at least one uppercase letter, one number, and one special character.',
								)
								.required('This field is required'),
						})}>
						<Form className='mt-8 flex flex-col items-center justify-center gap-8'>
							<CustomInput
								id='name'
								label='First and last name'
								help=''
								name='name'
								placeholder='Pedro Choque'
								type='text'
							/>
							<CustomInput
								id='email'
								label='email'
								help=''
								name='email'
								placeholder='test@gmail.com'
								type='text'
							/>
							<CustomInput
								id='customerId'
								label='customer id'
								help=''
								name='customerId'
								placeholder='1234567'
								type='number'
							/>

							<CustomInput
								id='password'
								label='password'
								help=''
								name='password'
								placeholder=''
								type='password'
							/>

							{status == 'checking' ? (
								<Loader />
							) : (
								<div className='flex flex-col gap-2 w-full'>
									<div className='flex justify-center items-center flex-col laptop:flex-row gap-4 w-full'>
										<ButtonPrimary
											title='SIGN UP'
											type='submit'
										/>
									</div>
									{errorMessage && (
										<p className='text-xs text-center hover:underline text-white mt-2'>
											{errorMessage}
										</p>
									)}
									<Link
										to='/login'
										className='text-xs text-center text-white mt-2 laptop:text-md hover:text-white'>
										Already have an account?
										<span className='ml-1 text-center underline hover:text-white'>
											Log in
										</span>
									</Link>
								</div>
							)}
						</Form>
					</Formik>
				</div>
			</div>
		</main>
	);
};
