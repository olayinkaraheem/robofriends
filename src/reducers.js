import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_SUCCESS, FETCH_ROBOTS_FAILED } from './constants'

const initialStateSearchRobots = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearchRobots, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({}, state, { searchField: action.payload }) OR
            return { ...state, searchField: action.payload }
        default: 
            return state
    }
}

const initialStateFetchRobots = {
    isPending: false,
    loadFailed: false,
    robots: []
}

export const fetchRobots = (state = initialStateFetchRobots, action = {}) => {
    switch(action.type){
        case FETCH_ROBOTS_PENDING:
            return Object.assign( {}, state, { isPending: true } )
        case FETCH_ROBOTS_SUCCESS:
            return Object.assign( {}, state, { isPending: false, robots: action.payload } )
        case FETCH_ROBOTS_FAILED:
            return Object.assign( {}, state, { isPending: false, robots: action.payload } )
        default:
            return state
    }
}