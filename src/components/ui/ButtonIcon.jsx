// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowUpRightFromSquare,
	faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ButtonIcon = ({ onClick, name, type = 'button' }) => {
	return (
		<button
			className='rounded-full hover:bg-custom-red p-3 flex items-center justify-center text-white bg-text'
			onClick={onClick}
			type={type}>
			{name == 'download' && (
				<FontAwesomeIcon
					icon={faDownload}
					size='xl'
				/>
			)}
			{name == 'arrowBlank' && (
				<FontAwesomeIcon
					icon={faArrowUpRightFromSquare}
					size='xl'
				/>
			)}
		</button>
	);
};
