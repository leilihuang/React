import 'antd/dist/antd.less';
import './less/module.less'
import React from 'react'
import {render} from 'react-dom'
import {Router , Link ,Route , IndexRoute, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducers/reducers.jsx'

import Module from './menu/module.jsx'

// const store = createStore(reducers)

render(
		<Router history = {browserHistory}>
			<Route path='/' component={Module}></Route>
			<Route path='/poss1'></Route>
			<Route path='/poss2'></Route>

		</Router>,
	document.getElementById('app')
)