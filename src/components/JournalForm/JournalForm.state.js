export const INITIAL_STATE = {
	isValid: {
		post: true,
		title: true,
		date: true
	},
	values: {
		post: undefined,
		title: undefined,
		date: undefined
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT' : {
		const titleValidity = action.payload.title?.trim().length;
		const postValidity = action.payload.post?.trim().length;
		const dateValidity = action.payload.date;
		return {
			values: action.payload,
			isValid: {
				post: postValidity,
				title: titleValidity,
				date: dateValidity
			},
			isFormReadyToSubmit: titleValidity && postValidity && dateValidity
		};
	}
	}
}