export const INITIAL_STATE = {
	isValid: {
		post: true,
		title: true,
		date: true
	},
	values: {
		post: '',
		title: '',
		date: '',
		tag: ''
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE':
		return { ...state, values: { ...state.values, ...action.payload}};
	case 'CLEAR':
		return { ...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT' : {
		const titleValidity = state.values.title?.trim().length;
		const postValidity = state.values.post?.trim().length;
		const dateValidity = state.values.date;
		return {
			...state,
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