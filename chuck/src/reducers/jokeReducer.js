import {FETCHING_JOKE_REQUEST, FETCHING_JOKE_SUCCESS, FETCHING_JOKE_FAILURE } from '../actions/index';


const initialState = {
    jokeText: 'Click the button below to get a joke',
    isLoading: false,
    error: ''
}

export const jokeReducer = (state = initialState, action) => {
    console.log('running')
    switch(action.type) {
        case FETCHING_JOKE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_JOKE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jokeText: action.payload
            }
        case FETCHING_JOKE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}