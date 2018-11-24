import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

import { searchRobots, fetchRobots } from './reducers';

import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

//const logger = createLogger()

const rootReducer = combineReducers({ searchRobots, fetchRobots })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root'));
registerServiceWorker();
