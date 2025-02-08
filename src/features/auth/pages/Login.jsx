import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgBackgroundLogin from 'assets/login_fondo.png';
import { ButtonPrimary, CustomInput } from 'components';
import { Form, Formik, useField } from 'formik';

export const Login = () => {
	return (
		<main className='pt-4 px-2 pb-6 bg-gradient-to-r from-custom-light-blue via-primary to-custom-dark-blue flex laptop:py-[120px] justify-center gap-[100px]'>
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
				<h2 className='text-xl text-white font-bold laptop:text-3xl'>ZDC ST</h2>

				<Formik
					initialValues={{ customerId: '', password: '' }}
					onSubmit={() => {}}>
					<form className='mt-8 flex flex-col items-center justify-center gap-8'>
						<CustomInput
							label='customer id'
							help='I don t know my customer number'
							name='customerId'
							placeholder='1234567'
							type='number'
						/>

						<CustomInput
							label='password'
							help='I forgot my password'
							name='password'
							placeholder=''
							type='password'
						/>

						<div className='flex justify-center items-center flex-col laptop:flex-row gap-4 w-full'>
							<ButtonPrimary
								title='LOGIN'
								type='submit'
							/>
							<button
								className='h-9 rounded-2xl border-[1px] w-full max-w-32 font-bold bg-secondary text-text hover:text-primary'
								type='submit'>
								<FontAwesomeIcon icon={faGoogle} />
							</button>
						</div>

						<p className='text-xs text-center hover:underline text-white mt-2 laptop:text-md hover:text-white'>
							If you re not a customer, get a plan
							<span className='text-center underline hover:text-white'>
								with us
							</span>
						</p>
					</form>
				</Formik>
			</div>
		</main>
	);
};
