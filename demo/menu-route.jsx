import './less/react-menu.less';
import React ,{Component} from 'react';
import { render} from 'react-dom';
import { Router, Route, Link , browserHistory} from 'react-router';

import Input from './component/react-input.jsx';
import Select from './component/react-select.jsx';
import Table from './component/react-table.jsx';
import Form from './examples/form.jsx';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            menuIndex:-1
        };
    }
    openMenu(index){
        this.setState({
            menuIndex:Object.is(this.state.menuIndex , index) ? -1 : index
        })
    }
    render(){
        let menus=[
            {
                title:'表单控件',
                path:'/form'
            }
        ];

        return (
            <div className="demo-box">
                <h1 className="demo-welcome">React组件学习之路</h1>
                <div className="demo-menu-box">
                    <ul className="demo-ul">
                        {menus.map(
                            (m,i)=>
                                <li key={i} className={this.state.menuIndex == i ? 'demo-li active' : 'demo-li'} >
                                    <div  className="demo-name" onClick={function(){this.openMenu(i)}.bind(this)}>{m.title}</div>
                                    <div  className="demo-ul-show" >
                                        <div  className="demo-content-ms"><Link to={m.path}>{m.title}</Link></div>
                                    </div>
                                </li>
                        )}
                    </ul>
                </div>
                <div className="demo-menu-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

render(
    (<Router history={browserHistory}>
        {/*  <Route path="/" component={Menu}>  菜单目录*/}
        <Route path="/" component={Form}>
              {/* <IndexRoute component={App}  />  默认路由设置 */}
            <Route path="form" component={Form}/>
        </Route>
    </Router>),
    document.getElementById('app')
);
