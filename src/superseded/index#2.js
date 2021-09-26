import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux'; //#Middleware: added
import { createLogger } from 'redux-logger'; //#Middleware: added

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

//Redux:
//Action --> Reducer --> Store (big JS object that describes state of app) --> Make changes (React)
//with redux all states can be removed; will be passed down from the store as a prop to <App>

const logger = createLogger(); //#Middleware: added

//create store
// const store = createStore(rootReducer); //combine all reducers to rootReducer; here only one: searchRobots
// const store = createStore(searchRobots);

//#Middleware: below will automatically log prev state, action, next state
const store = createStore(searchRobots, applyMiddleware(logger)); //#Middleware: added

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
