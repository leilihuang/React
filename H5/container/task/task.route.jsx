import React from 'react';
import { Route } from 'react-router';

import Home from './home/home';


export default (
    <div>
        <Route path="task/home" component={Home} />
    </div>
);
