import {API_BASE_URL} from '../config';

export const submitContactForm = (senderEmail, receiverEmail, message) => dispatch => {
    return fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST', 
        body: JSON.stringify({
            senderEmail, 
            receiverEmail, 
            message
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( res => {
        if(!res.ok) {
            return Promise.reject(res.statusText)
        }
        console.log("Your message was successful")
    })
    .catch(err => {
        console.error(err)
    })
}
