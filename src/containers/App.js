//React syntax rules
//https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f

import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//below are needed to connect with redux (those are the files that can access the redux state)
// import { setSearchField } from '../actions';
import {setSearchField, requestRobots} from '../actions'; //#Async Actions

//store = searchRobots (as reducer)
const mapStateToProps = state => {
	return {
		// searchField: state.searchField
		//#Async Actions
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};

//dispatch is what triggers the action
const mapDispatchToProps = dispatch => {
	// onSearchChange is a prop, so any name can be used; use this name to be consistent with function used below
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		//#Async Actions; below onRequestRobots prop to return a function
		onRequestRobots: () => dispatch(requestRobots()), //equal to: onRequestRobots: () => requestRobots(dispatch); as a fct is returned action can be changed, see actions.js
	};
};

class App extends Component {
	//#Async Action: constructor not needed anymore; robots part of the props
	// constructor()
	// {
	//   super()
	//   this.state =
	//   {
	//     robots: [],
	//     // searchfield: '' //#connect(): removed as redux takes care of it --> mapStateToProps
	//   }
	// }

	componentDidMount() {
		// console.log(this.props.store);
		// console.log(this.props.store.getState());
		// fetch('https://jsonplaceholder.typicode.com/users')
		//   .then(response=> response.json())
		//   .then(users => {this.setState({ robots: users})});
		//#Async Actions - fetch not needed anymore as it is passed through props
		this.props.onRequestRobots();
	}

	//#connect(): removed as redux takes care of it --> mapDispatchToProps
	// onSearchChange = (event) => {
	//   this.setState({ searchfield: event.target.value })
	// }

	render() {
		// const { robots, searchfield } = this.state; //#connect(): removed searchfield as it is coming down as props
		// const { robots } = this.state; //#Async Actions: removed
		// const { searchField, onSearchChange } = this.props; //#connect(): added - it's now a prop

		const {searchField, onSearchChange, robots, isPending} = this.props; //#Async Actions: added
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		// return !robots.length ? //#Async Actions
		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				{/* <SearchBox searchChange={this.onSearchChange}/> //#connect(): removed as it is now a props */}
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

// export default App;

//App connect to redux - subscribe to any changes in the redux store
//connect() is a higher order function - a function that returns a function (it runs App)
//connect runs with below 2 parameters and then gives those props to the App
export default connect(mapStateToProps, mapDispatchToProps)(App);
