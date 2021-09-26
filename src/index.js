import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux'; //#Middleware: added
import {createStore, applyMiddleware, combineReducers} from 'redux'; //#Async Action: added

import {createLogger} from 'redux-logger'; //#Middleware: added
//thunk: checks if any actions return a function instead of an object (setSearchField returns an object, searchRobots a function)
import thunk from 'redux-thunk'; //#Async Action: added

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
// import { searchRobots } from './reducers'; //#Middleware: added
import {searchRobots, requestRobots} from './reducers'; //#Async Action
import 'tachyons';

//Redux:
//Action --> Reducer --> Store (big JS object that describes state of app) --> Make changes (React)
//with redux all states can be removed; will be passed down from the store as a prop to <App>

const logger = createLogger(); //#Middleware: added

//create store
// const store = createStore(rootReducer); //combine all reducers to rootReducer; here only one: searchRobots
// const store = createStore(searchRobots);

//#Middleware: below will automatically log prev state, action, next state
// const store = createStore(searchRobots, applyMiddleware(logger)); //#Middleware: added

const rootReducer = combineReducers({searchRobots, requestRobots}); //#Async Action: added
// const store = createStore(searchRobots, applyMiddleware(thunk,logger)); //#Async Action: added
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); //#Async Action

// ReactDOM.render(<App />, document.getElementById('root'));
// pass store as props object
// ReactDOM.render(<App store={store}/>, document.getElementById('root'));

//do not pass store to all elements down the tree but only App --> use Provider
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
