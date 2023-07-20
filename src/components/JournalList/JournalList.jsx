import './JournalList.css';

function JournalList({ children }) {

	return (
		<div className='journal-list'>
			{children}
		</div>
	);
}

export default JournalList;