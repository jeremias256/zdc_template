import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ButtonWithIcon = ({ onClick, name, type = 'button' }) => {
	return (
		<button
			className='h-9 rounded-2xl border-[1px] w-full max-w-32 text-text font-bold bg-secondary hover:text-primary'
			onClick={onClick}
			type={type}>
			{name == 'google' && <FontAwesomeIcon icon={faGoogle} />}
		</button>
	);
};
