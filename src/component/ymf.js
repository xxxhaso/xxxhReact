import React from 'react'
import { getData, postData, axiosGetData } from './axios'

class Ymt extends React.Component {
  state = {
    arr: [],
    arrStatu:false
  };

  getData = () => {
    axiosGetData().then(res => {
      this.setState({
        arr: res.data.data
      })
      
    })
  };

  conso = () => {
    console.log(this.state.arr)
  };
  componentDidMount() {
    //componentDidMount方法:在组件挂载完成后调用
    //componentDidUpdate方法：只要页面的state或者model中的state中定义的变量值发生改变，这个方法就会执行
    axiosGetData().then(res => {
      this.setState({
        arr: res.data.data
      })
    })
  }
  render() {
    function Show(props) {
      const arr = props.arr
      const Showp = arr.map((item, index) => {
        if (index < 10) {
         return <li key={index}>{`时间是${item.time},经度为${item.longitude},纬度为${item.longitude}`}</li>
        }
      }

      )
      return <ul style={{ listStyleType: "none" }}>{Showp}</ul>
    }
    return (
      <div >
        <button onClick={this.getData}>获取数据</button>
        <button onClick={this.conso}>打印数据</button>
        <br />
        <Show arr={this.state.arr} />
      </div>
    )
  }
}

export default Ymt