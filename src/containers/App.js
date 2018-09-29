import React from 'react';
import { Component } from 'react';
import CardsList from '../components/CardsList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../containers/ErrorBoundary'
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: '',
			loadFailed: false
		}
	}

	onSearchChange = (event)=>{
		this.setState({ searchField: event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}))
		.catch( err => {
			console.log(err)
			// Don't mistake this with error boundary
			// Error boundaries are used to detect if 
			// something went wrong with a certain component maybe while trying to load or so
			this.setState({ loadFailed: true })
		})
	}

	render(){

		const { robots, searchField, loadFailed } = this.state;

		const filteredRobot = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(!robots.length){
			return (
				<div className="tc">
					{loadFailed ? <p className="error">Connection To API End-point Failed</p> : <h1>Loading...</h1>}
				</div>
			)
		} else {
			return (
				<div className="tc">
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox onSearchChange={this.onSearchChange}/>
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

export default App;