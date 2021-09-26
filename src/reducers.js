//#Async Action: added
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

//#Async Action: edited, now we have states for two different reducers
const initialStateSearch = {
  searchField: '',
};

//create reducer function
//action: search robots based on the searchField
export const searchRobots = (
  state = initialStateSearch,
  action = {} //give it a default state in case parameters are empty
) => {
  // console.log(action.type);
  //if we receive actions that are related to search robots, the state is modified
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

//#Async Action: added
const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

//#Async Action: reducer function #2 added
export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });

    case REQUEST_ROBOTS_FAIL:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
