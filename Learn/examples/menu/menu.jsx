import React ,{ Component } from 'react'
import { Menu , Icon } from 'antd'
import {render} from 'react-dom'
import {Link} from 'react-router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MenuDemo extends Component{
  constructor(props) {
    super(props);
    this.state={
      current: '0'
    };
  }
  handleClick(e) {
    
    this.setState({
      current: e.key,
    });
  }
  render() {
    let data=[
      {path:'/home',title:'首页',icon:'home'},
      {path:'/add',title:'新增',icon:'plus-circle-o'},
      {path:'/list',title:'列表',icon:'bars'}
    ];  
    return (
      <div className="menu-box">
          <Menu onClick={this.handleClick.bind(this)}
            selectedKeys={[this.state.current]}
            mode="horizontal">
              {
                data.map( (d,i) =>
                      <Menu.Item key={i}>
                        <Link to={d.path} ><Icon type={d.icon} />{d.title}</Link>
                     </Menu.Item>
                  )
              }
          </Menu>
          <div className="menu-content">
            {this.props.children}
          </div>
      </div>
    );
  }
}
