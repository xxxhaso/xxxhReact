import React from 'react'

class Ymttt extends React.Component {
  state = {
    arrO: [1, 2, 3, 4, 5],
    arrT: [6, 7, 8, 9, 0]
  }
  conso = (...num) => {
    console.log(...num)
  }
  render() {
    return (
      <div>
        <button onClick={this.conso}>打印数据</button>
      </div>

    )
  }
}
const arr0 = [1, 2, 3, 4]
const arrT = [5, 6, 7, 8]
const arr3 = { name: "xianghui", age: 12 }
function conso(...num) {
  return num.reduce((preValue, currentValue) => {
    return preValue + currentValue
  })
}
console.log(conso(1, 2, 3, 4, 5, 6))
console.log({...arr3})
export default Ymttt