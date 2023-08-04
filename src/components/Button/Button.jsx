import './Button.css';

function Button({ children, onClick }) {
	return (
		<button className='button accent' onClick={onClick}>{children}</button>
	);
}

export default Button;