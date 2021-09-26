//#Async Action: added
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL,
} from './constants';

export const setSearchField = text => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text, //payload = action to take by redux
});

//#Async Action: added
// export const requestRobots = (dispatch) => {

//changed because of App.js mapDispatchToProps
//higher order function - used because of thunk: Async Action - 23:50
//thunk sees function returned by the action and allows it to execute actions based on code - basically waits for response
export const requestRobots = () => dispatch => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	//asynchronous
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({type: REQUEST_ROBOTS_FAIL, payload: error})); //in case of error
};
