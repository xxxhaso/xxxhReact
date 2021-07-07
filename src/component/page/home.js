import React from 'react'

class Home extends React.Component {
    jump=()=>{
      console.log(this)
        const {from} = {from: {pathname: '/detail'}}
        this.props.history.push(from)
    }
  render() {
    return (
      <div >
      <button onClick={this.jump}>点击跳转</button>
      </div>
    )
  }
}
export default Home