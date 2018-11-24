import React from 'react';
import { Component } from 'react';
import CardsList from '../components/CardsList';
// import { robots } from './robots';
import Header from './Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../containers/ErrorBoundary'
import CounterButton from './CounterButton'
import './App.css';

import { connect } from 'react-redux'
import { setSearchField, fetchRobots } from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.fetchRobots.robots,
		isPending: state.fetchRobots.isPending,
		loadFailed: state.fetchRobots.loadFailed,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		// onFecthRobots: () => fetchRobots(dispatch),
		onFecthRobots: () => dispatch(fetchRobots()),
	}
}

class App extends Component {

/* 	constructor(){
		super();
		this.state = {
			robots: [],
			// searchField: '',
			loadFailed: false
		}
	} */

	// onSearchChange = (event)=>{
	// 	this.setState({ searchField: event.target.value});
	// }

	componentDidMount(){
		this.props.onFecthRobots()
	}

	render(){

		// const { robots, loadFailed } = this.state;
		const { robots, loadFailed, searchField, onSearchChange } = this.props;

		/* const filteredRobot = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		}) */
		
		if(!robots.length){
			
			return (
				<div className="tc">
					{loadFailed ? <p className="error">Connection To API End-point Failed</p> : <h1>Loading...</h1>}
					<CounterButton color={'red'} />
				</div>

			)
		} else {
			const filteredRobot = robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchField.toLowerCase());
			})
			return (
				<div className="tc">
					<Header/>
					<SearchBox onSearchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardsList robots={filteredRobot} />
						</ErrorBoundary>
					</Scroll>
				</div>
			)
		}
		
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);