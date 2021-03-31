import axios from 'axios';

export const FETCHING_JOKE_REQUEST = 'FETCHING_JOKE_REQUEST'
export const FETCHING_JOKE_SUCCESS = 'FETCHING_JOKE_SUCCESS';
export const FETCHING_JOKE_FAILURE = 'FETCHING_JOKE_FAILURE';

export const getNewJoke = () => (dispatch) => {
    dispatch({ type: FETCHING_JOKE_REQUEST});

    axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            dispatch({
                type: FETCHING_JOKE_SUCCESS,
                payload: res.data.value
            })
        })
        .catch(err => {
            dispatch({
                type: FETCHING_JOKE_FAILURE,
                payload: err.message
            })
        })
}