import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext({
	userId: 1
});

export const UserContextProvidev = ({ children }) => {
	const [userId, setUserId] = useState(1);

	return <UserContext.Provider value={{ userId, setUserId }}>
		{children}
	</UserContext.Provider>;
};
