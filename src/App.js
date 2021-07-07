import React from 'react'
import { Menu, Row, Col } from 'antd';
import { PieChartOutlined,  MailOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' //imrr
import Index from '../src/component/boot'
import ymt from '../src/component/ymt'
import ymttt from '../src/component/ymttt'
import ymf from '../src/component/ymf'
import props from '../src/component/props'
import antd from '../src/component/antd'
import './daohang.css'
const { SubMenu } = Menu;

// const menus = [
//   {
//     title: '首页',
//     icon: 'home',
//     key: '/home'
//   },
//   {
//     title: '基本组件',
//     icon: 'laptop',
//     key: '/home/general',
//     subs: [
//       { key: '/home/general/button', title: '按钮', icon: '', },
//       { key: '/home/general/icon', title: '图标', icon: '', },
//       { key: '/home/general/mymy', title: '自我摧毁程序', icon: '', },
//     ]
//   },
// ]
// 用上面这个数据把页面封装成函数


class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div >
        <Router>
          <Row>
            <Col span={4}>
              <div className="width">
                <a href='#/detail'>去detail</a>
                <Menu
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}
                >
                  <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <Link to="/ym">首页</Link>
                  </Menu.Item>
                  <SubMenu key="sub1" icon={<MailOutlined />} title="基本组件">
                    <Menu.Item key="3"><Link to="/ymf">获得接口数据并展示</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/ymt">图标</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/ymttt">练习state专用路由</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/reactProps">练习Hook</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/antd">练习Antd</Link></Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </Col>
            <Col span={20}>
              <div style={{ paddingLeft: 30 }}>
                <Route path="/ym" exact component={Index} />
                <Route path="/ymt" component={ymt} />
                <Route path="/ymttt" component={ymttt} />
                <Route path="/ymf" exact component={ymf} />
                <Route path="/reactProps" exact component={props} />
                <Route path="/antd" exact component={antd} />
              </div>
            </Col>
          </Row>
        </Router>
      </div>
    )
  }
}

export default App
