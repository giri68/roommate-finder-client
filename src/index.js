import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


// controls map scroll
function mapScroll(){
    let ypos = window.pageYOffset;
    let distanceTop = 100
    if(ypos > distanceTop){
        document.getElementById('js-map').style.top = ypos - 100 + 'px'; 
    } 
}
window.addEventListener('scroll', mapScroll); 
