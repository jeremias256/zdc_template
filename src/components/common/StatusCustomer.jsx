import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonIcon, CustomCheckbox } from 'components';
import { useState } from 'react';

export const StatusCustomer = ({ status }) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<>
			{status[0]?.status == 'active' && (
				<div className='font_18_400 text-white mt-4 bg-success py-2 px-3 flex justify-center items-center rounded-lg'>
					Your balance is up to date.
				</div>
			)}
			{status[0]?.status == 'suspended' && (
				<div className='font_18_400 text-white mt-4 bg-warning py-2 px-3 flex justify-center items-center rounded-lg'>
					Suspended for non-payment.
				</div>
			)}
			{status[0]?.status == 'pending' && (
				<div className='flex flex-col gap-4'>
					<div className='font_18_400 text-warning mt-4 bg-secondary py-2 px-3 flex justify-center items-center rounded-lg'>
						Pending payment balance.
					</div>

					<div>
						<p className='font_14_700 text-text'>
							Please select the invoice you wish to pay
						</p>

						<div className='bg-secondary p-4 rounded-2xl mt-4'>
							<div className='flex justify-between'>
								<div className='flex gap-4'>
									<CustomCheckbox
										checked={isChecked}
										onChange={() => setIsChecked(!isChecked)}
									/>
									<span className='py-2 px-3 bg-warning font_18_400 text-white w-auto rounded-md'>
										Septiembre
									</span>
								</div>
								<div className='flex gap-4'>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='download'
										type='button'
									/>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='arrowBlank'
										type='button'
									/>
									{/* <button
										className='text-text hover:text-custom-red border-text pl-2'
										type='button'>
										<FontAwesomeIcon icon={faChevronDown} />
									</button> */}
								</div>
							</div>
							<hr className='mt-4 h-[2px] bg-secondary'></hr>
							<div className='flex justify-between mt-4'>
								<p className='custom_label'>
									Estado:
									<span className='custom_error'>Pendiente de pago</span>
								</p>
								<p className='custom_label'>
									Saldo <span className='custom_error'>$ 27.116,00</span>
								</p>
							</div>
						</div>
						<div className='bg-secondary p-4 rounded-2xl mt-4'>
							<div className='flex justify-between'>
								<div className='flex gap-4'>
									<CustomCheckbox
										checked={isChecked}
										onChange={() => setIsChecked(!isChecked)}
									/>
									<span className='py-2 px-3 bg-warning font_18_400 text-white w-auto rounded-md'>
										Septiembre
									</span>
								</div>
								<div className='flex gap-4'>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='download'
										type='button'
									/>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='arrowBlank'
										type='button'
									/>
									{/* <button
										className='text-text hover:text-custom-red border-text pl-2'
										type='button'>
										<FontAwesomeIcon icon={faChevronDown} />
									</button> */}
								</div>
							</div>
							<hr className='mt-4 h-[2px] bg-secondary'></hr>
							<div className='flex justify-between mt-4'>
								<p className='custom_label'>
									Estado:
									<span className='custom_error'>Pendiente de pago</span>
								</p>
								<p className='custom_label'>
									Saldo <span className='custom_error'>$ 27.116,00</span>
								</p>
							</div>
						</div>
						<div className='bg-secondary p-4 rounded-2xl mt-4'>
							<div className='flex justify-between'>
								<div className='flex gap-4'>
									<CustomCheckbox
										checked={isChecked}
										onChange={() => setIsChecked(!isChecked)}
									/>
									<span className='py-2 px-3 bg-warning font_18_400 text-white w-auto rounded-md'>
										Septiembre
									</span>
								</div>
								<div className='flex gap-4'>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='download'
										type='button'
									/>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='arrowBlank'
										type='button'
									/>
									{/* <button
										className='text-text hover:text-custom-red border-text pl-2'
										type='button'>
										<FontAwesomeIcon icon={faChevronDown} />
									</button> */}
								</div>
							</div>
							<hr className='mt-4 h-[2px] bg-secondary'></hr>
							<div className='flex justify-between mt-4'>
								<p className='custom_label'>
									Estado:
									<span className='custom_error'>Pendiente de pago</span>
								</p>
								<p className='custom_label'>
									Saldo <span className='custom_error'>$ 27.116,00</span>
								</p>
							</div>
						</div>
						<div className='bg-secondary p-4 rounded-2xl mt-4'>
							<div className='flex justify-between'>
								<div className='flex gap-4'>
									<CustomCheckbox
										checked={isChecked}
										onChange={() => setIsChecked(!isChecked)}
									/>
									<span className='py-2 px-3 bg-warning font_18_400 text-white w-auto rounded-md'>
										Septiembre
									</span>
								</div>
								<div className='flex gap-4'>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='download'
										type='button'
									/>
									<ButtonIcon
										onClick={() => console.log('CLICK ICON')}
										name='arrowBlank'
										type='button'
									/>
									{/* <button
										className='text-text hover:text-custom-red border-text pl-2'
										type='button'>
										<FontAwesomeIcon icon={faChevronDown} />
									</button> */}
								</div>
							</div>
							<hr className='mt-4 h-[2px] bg-secondary'></hr>
							<div className='flex justify-between mt-4'>
								<p className='custom_label'>
									Estado:
									<span className='custom_error'>Pendiente de pago</span>
								</p>
								<p className='custom_label'>
									Saldo <span className='custom_error'>$ 27.116,00</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
