import React from 'react';
import { Route } from 'react-router';

import Home from './home/home';
import Detail from './detail/detail';

export default (
    <div>
        <Route path="live/home" component={Home} />
        <Route path="home/detail/:id" component={Detail} />
    </div>
);
