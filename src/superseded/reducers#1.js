import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: '',
};

//create reducer function
//action: search robots based on the searchField

// export const searchRobots = (state, action)
//give it a default state in case parameters are empty
export const searchRobots = (state = initialState, action = {}) => {
  console.log(action.type);
  //if we receive actions that are related to search robots, the state is modified
  // if(action.type===CHANGE_SEARCH_FIELD) //action.type specified in actions.js file
  // {
  // 	return Object.assign({}, state, {searchField: action.payload});
  // }
  // else
  // {
  // return state;
  // }
  //switch instead of ifelse
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
