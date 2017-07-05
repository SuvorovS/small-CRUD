import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import STORE from './store/store';
import App from './app';



ReactDOM.render(
    <Provider store={STORE}> 
        <App />
    </Provider>,

  document.getElementById('root')
);