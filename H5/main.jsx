import 'babel-polyfill';
import React,{ Component } from 'react';
import { render } from 'react-dom';
import {Router, Route ,Link , browserHistory , IndexRoute} from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import reducers from './config/reducer';
import routes from './config/router';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}></Router>
    </Provider>,
    document.getElementById('app')
);



