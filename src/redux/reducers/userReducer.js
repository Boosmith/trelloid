export default function userReducer(state = [], action) {
	switch(action.type) {
		case "CREATE_USER":
			return [...state, {...action.user}];
		default:
			return state;
	}
}
