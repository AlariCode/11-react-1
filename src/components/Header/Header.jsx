import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header() {
	return (
		<>
			<img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
			<SelectUser />
		</>
	);
}

export default Header;