import 'antd/dist/antd.less';
import './less/module.less'
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router , Link ,Route , IndexRoute, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './data/data'

import reducers from './reducers/reducers.jsx'

import Module from './menu/module.jsx'

import Poss1 from './menu/poss1.jsx'
import Games from './container/games/games.jsx'
import GameAdd from './container/games/gameAdd.jsx'


import Menus from './container/gameMenu/gameMenu.jsx'
import GameEdit from './container/gameMenu/gameEdit.jsx'

import List from './container/gameList/gameList.jsx'
import Banner from './container/gameBanner/gameBanner.jsx'

const store = createStore(reducers)

render(
    <Provider store = {store}>
        <Router history = {browserHistory}>
            <Route path='/' component={Poss1} />
            {/*<Route path='/' component={Module} />*/}
            <Route path='poss1' component={Poss1}>
                <Route path='games' component={Games} />
                <Route path='games/add' component={GameAdd} />
                
                <Route path='menu' component={Menus} /> 
                <Route path='menuEdit' component={GameEdit} /> 
                <Route path='list' component={List} /> 
                <Route path='banner' component={Banner} /> 
            </Route>
            <Route path='/poss2' />
        </Router>
    </Provider>,
	document.getElementById('app')
)