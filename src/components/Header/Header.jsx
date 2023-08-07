import { useCallback, useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);
	const [secondIndex, setSecondIndex] = useState(0);
	console.log('Header');

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
		setSecondIndex(i => i + 1);
		console.log(secondIndex);
	};

	return (
		<>
			<Logo image={logos[logoIndex]} />
			<SelectUser />
			<Button onClick={toggleLogo}>Сменить лого</Button>
		</>
	);
}

export default Header;