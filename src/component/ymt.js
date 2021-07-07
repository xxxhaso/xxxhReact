import React from 'react'

class Ymt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileSize: 0,
            bitRate: 0,
            time: 0,
        }
        this.compute = this.compute.bind(this);
        this.changeFile=this.changeFile.bind(this)
        this.changeBit=this.changeBit.bind(this)
        this.changeTime=this.changeTime.bind(this)
    }
    compute() {
    }
    changeFile(e) {
        this.setState({
            fileSize: e.target.value
        })
    }
    changeBit(e) {
        this.setState({
            bitRate: e.target.value
        })
    }
    changeTime(e) {
        this.setState({
            time: e.target.value
        })
    }
    render() {
        return (
            <div >
                <h1>文件大小计算</h1>
                <input placeholder="文件大小"  onChange={this.changeFile} style={{ marginLeft: 10 }} />
                <input placeholder="码率" style={{ marginLeft: 10 }} onChange={this.changeBit} />
                <input placeholder="所需时间" style={{ marginLeft: 10 }} onChange={this.changeTime} />
                <button onClick={this.compute}>计算</button>
            </div>

        )
    }
}

export default Ymt