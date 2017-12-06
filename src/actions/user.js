import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const FIND_A_ROOM = 'FIND_A_ROOM';
export const findARoom = () => ({
    type: FIND_A_ROOM
});

export const FILL_A_ROOM = 'FILL_A_ROOM';
export const fillARoom = () => ({
    type: FILL_A_ROOM
});

export const FIND_A_ROOMMATE = 'FIND_A_ROOMMATE';
export const findARoommate = () => ({
    type: FIND_A_ROOMMATE
});



export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
