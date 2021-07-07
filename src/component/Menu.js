import React from 'react'
import Router from "./Router";

const Menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/'
  },
  {
    title: '其它',
    icon: 'bulb',
    key: '/',
    subs:[
      {key: '/', title: '动画', icon: '',},
      {key: '/detail', title: '画廊', icon: '',},
    ]
  },
]


class SiderNav extends React.Component {
  render() {
    return (
      <div >
        <div style={styles.logo}></div>
        <Router menus={Menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav