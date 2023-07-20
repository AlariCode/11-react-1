import './CardButton.css';

function CardButton({ children, className }) {
	const cl = 'card-button' + (className ? ' '+ className : '');

	return (
		<button className={cl}>
			{children}
		</button>
	);
}

export default CardButton;