//actions are JS objects

//the App.js function onSearchChange used by SearchBox.js modifies the state 'searchfield'

//CODE 1: ----------------------------------------------------------------------------------
// export const setSearchfield = function (text){
// }

//CODE 2: ----------------------------------------------------------------------------------
//text typed in by user into the field
// export const setSearchfield = (text) =>
// {
// 	return (
// 		{type: 'CHANGE_SEARCH_FIELD',
// 		payload: text}
// 	);
// }

//CODE 3: ----------------------------------------------------------------------------------
// SHORT:
// 	() => ({ name: 'Amanda' })  // Shorthand to return an object
//	() => {
//    return { name : 'Amanda' }
// 	}

//user types text into search field,
//below function will return object with specified type and payload
//payload is common in Redux and sends whatever data is needed to the Reducer
// export const setSearchField = (text) => (
// 		{
// 			//capitalised type as it is a constant (JS standard)
// 			//replace 'CHANGE_SEARCH_FIELD' string with variable in the next step
// 			//constants will be stored in another file
// 			type: 'CHANGE_SEARCH_FIELD',
// 			payload: text
// 		}
// 	);

//CODE 4: ----------------------------------------------------------------------------------
// import { CHANGE_SEARCH_FIELD } from './constants';
// export const setSearchField = (text) => (
// 		{
// 			type: CHANGE_SEARCH_FIELD,
// 			payload: text
// 		}
// 	);

//CODE 5: ----------------------------------------------------------------------------------
import { CHANGE_SEARCH_FIELD } from '../constants';
export const setSearchField = (text) => {
  console.log(text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};
