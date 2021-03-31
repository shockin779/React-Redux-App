import React from 'react';
import { connect } from 'react-redux';
import { getNewJoke } from '../actions/index';
import PacmanLoader from 'react-spinners/PacmanLoader';

import './Joke.css';

const Joke = props => {
    return(
        <div className='joke-container'>
            <p className="joke">{props.jokeText}</p>
            <button onClick={props.getNewJoke}>Get New Joke</button>
            {props.isLoading ? <PacmanLoader color="#1316d1" size="25" margin="2" /> : <div></div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        jokeText: state.jokeText,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {getNewJoke})(Joke);