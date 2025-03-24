import imgBackgroundLogin from 'assets/login_fondo.png';
import { ButtonPrimary, ButtonWithIcon, CustomInput, Loader } from 'components';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { startGoogleSignIn, startLoginWithEmailPassword } from 'store';
import * as Yup from 'yup';

export const Login = () => {
	const dispatch = useDispatch();
	const { status, errorMessage } = useSelector(state => state.auth);

	const onSubmit = values => {
		dispatch(startLoginWithEmailPassword(values.email, values.password));
	};

	const onGoogleSignIn = values => {
		dispatch(startGoogleSignIn(values.email, values.password));
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
							email: 'gab.menacho@gmail.com',
							password: '1234$Abc',
						}}
						onSubmit={onSubmit}
						validationSchema={Yup.object({
							email: Yup.string()
								.email('Must be a valid email address')
								.required('This field is required.'),
							password: Yup.string()
								.min(8, 'It must have at least 8 characters.')
								.max(12, 'It cannot have more than 12 characters.')
								.matches(
									/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
									'Debe contener al menos una mayúscula, un número y un carácter especial',
								)
								.required('This field is required.'),
						})}>
						{({ values }) => (
							<Form className='mt-8 flex flex-col items-center justify-center gap-8'>
								<CustomInput
									id='email'
									label='email'
									help='I don t know my customer number'
									name='email'
									placeholder='gab.menacho@gmail.com'
									type='text'
								/>

								<CustomInput
									id='password'
									label='password'
									help='I forgot my password'
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
												title='LOGIN'
												type='submit'
											/>
											<ButtonWithIcon
												onClick={() => onGoogleSignIn(values)}
												name='google'
												type='button'
											/>
										</div>
										{errorMessage && (
											<p className='text-xs text-center hover:underline text-white mt-2'>
												{errorMessage}
											</p>
										)}
									</div>
								)}

								<Link
									to='/signup'
									className='text-xs text-center text-white mt-2 laptop:text-md hover:text-white'>
									If you re not a customer, get a plan
									<span className='ml-1 text-center underline hover:text-white'>
										with us
									</span>
								</Link>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</main>
	);
};
