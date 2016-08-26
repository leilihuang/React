import React from 'react';
import { Link } from 'react-router'
import { Menu , Icon , Row ,Col } from 'antd'
import menu from '../data/menu.js'
import 'isomorphic-fetch'

const SubMenu = Menu.SubMenu;

export default class Poss1 extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
        current:'sub0',
        openKeys: [],
        dataMenu:menu
    }
  }
  handleClick(e){
    console.log(e.key)
    this.setState({
        current : e.key,
        openKeys : e.keyPath.slice(1)
    })
  }
  onToggle(info){
    this.setState({
        openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    })
  }
  render() {
    return (
      <div className="layout-box">
          <Row>
            <Col span={24}>
              <h1 className="h1">应用市场</h1>
            </Col>
          </Row>
          <Row>
            <Col span={18} push={6}>
              <div className="content-box">
                {this.props.children}
              </div>
            </Col>
            <Col span={5} pull={18}>
              <div className="menu-box">
                  <Menu onClick = {this.handleClick.bind(this)}
                    openKeys = {this.state.openKeys}
                    onOpen = {this.onToggle.bind(this)}
                    onClone = {this.onToggle.bind(this)}
                    selectedKeys = {[this.state.current]}
                    mode = 'inline'>
                    {this.state.dataMenu.map(
                        (menu,i) => {
                            if(menu.children){
                                return (
                                  <SubMenu key ={'sub'+i}  title={<span><Icon type={menu.icon} />{menu.title}</span>}>
                                      {menu.children.map(
                                            (children,i) =>
                                            {
                                                if(children.children && children.children.length > 0){
                                                   return (
                                                        <SubMenu key ={'subItem'+i} title={children.title}>
                                                            {children.children.map((d,i) =>
                                                                <Menu.Item key={'childz'+i}> <Link to={d.path}>{d.title}</Link></Menu.Item>
                                                             )}    
                                                        </SubMenu>
                                                    )
                                                   
                                                }else{
                                                   return <Menu.Item key={'child'+i}> <Link to={children.path}>{children.title}</Link></Menu.Item>
                                                }
                                            }
                                        )}
                                    </SubMenu>
                                )
                            }else{
                                return (
                                    <Menu.Item key={'dM'+i}> <Link to={menu.path}>{menu.title}</Link> </Menu.Item>
                                )
                            }
                        }
                    )}
                  </Menu>
              </div>
            </Col>
          </Row>
      </div>
    );
  }
}


