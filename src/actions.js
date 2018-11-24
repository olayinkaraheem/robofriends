import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_SUCCESS, FETCH_ROBOTS_FAILED } from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

/* when we do fetchRobots(dispatch) in App.js

export const fetchRobots = (dispatch) => {
    dispatch({ type: FETCH_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then( robots => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: robots}) )
		.catch( error => dispatch({ type: FETCH_ROBOTS_FAILED, payload: error}) )
}
 */

 /* OR this when we do dispatch(fetchRobots()) in App.js */
export const fetchRobots = () => (dispatch) => {
    dispatch({ type: FETCH_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then( robots => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: robots}) )
		.catch( error => dispatch({ type: FETCH_ROBOTS_FAILED, payload: error}) )
}