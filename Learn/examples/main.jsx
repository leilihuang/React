import 'antd/dist/antd.less';  // or 'antd/dist/antd.less'
import React , {Component} from 'react'
import {Router , Route , IndexRoute , browserHistory} from 'react-router'
import {render} from 'react-dom'
import Layout from './menu/layout.jsx'
import MenuDemo from './menu/menu.jsx'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import lists from './reducers/reducers'


import Home from './content/Home.jsx'
import Edit from './content/edit.jsx'
import Add from './content/add.jsx'
import VisibleTodoList from './containers/UserList'
import UserInfoData from './containers/Userinfo'

const store = createStore(lists)

render(
   <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={MenuDemo}>
         <IndexRoute component={Add}  />
          <Route path='/home' component={Home}></Route>
          <Route path='/edit' component={Edit}></Route>
          <Route path='/add' component={Add}></Route>
          <Route path='/list' component={VisibleTodoList}></Route>
          <Route path='/info' component={UserInfoData}></Route>
        </Route>
      </Router>
    </Provider>,
	document.getElementById('app')
);

