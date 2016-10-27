import React from 'react';
import { Route } from 'react-router';
import live from '../container/live/live.route';
import task from '../container/task/task.route';

import Home from '../container/live/home/home';

export default (
    <div>
        <Route path="/" component={Home} />
        {live},
        {task}
    </div>
);
