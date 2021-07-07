import React from 'react'
import { getData, postData } from './axios'
class Boot extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    mydada: {
      c1Period: "C1.period 0",
      c2Period: "C2.period 0",
      c3Period: "C3.period 0",
      c4Period: "C4.period 0",
      c5Period: "C5.period ",
      c6Period: "C6.period ",
      c7Period: "C7.period ",
      deadthRate: "deadth rate 0.2",
      incidenceRate: "Prevalence rate 0.2",
      infectedPeople: [],
      infectionPeriod: "Infection Period 0",
      infectionRate: "Infection rate 0.78",
      latencyPeriod: "latency Period 0",
      quarantinePeriod: "quarantine period 0",
      removalRate: "Recovery rate 0.2",
      scenarioPeriod: "scenario.period 0 0"
    },
    date: new Date(),
    num: 0,
    isToggleOn: true,
  }
  componentDidMount() {
    this.timeChange = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearTimeout(this.timeChange)
  }

  post = e => {
    postData(this.state.mydada)
  }
  focusTextInput=()=> {
    this.myRef.current.focus()
  }

  transmit(chashu, event) {
    console.log("接收到参数了", chashu)
  }
  handleClick=()=> {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  handleLoginIn=()=> {
    this.setState({ isToggleOn: true })
  }
  handleLoginOut=()=> {
    this.setState({ isToggleOn: false })
  }


  componentDidMount() {
  }

  componentWillUnmount() {
  }
  render() {
    function Welcome(props) {
      return <h1>Hello ,{props.name}</h1>
    }
    function stopClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    function UserGreeting(props) {
      return <h1>Welcome user</h1>
    }
    function GuestGreeting(props) {
      return <h1>Plesae sign up!</h1>
    }

    function Greeting(props) {
      const mystate = props.mystate
      if (mystate) {
        return <UserGreeting />
      } else {
        return <GuestGreeting />
      }
    }
    function LoginButton(props) {
      return (
        <button onClick={props.onClick}>
          Login
        </button>
      );
    }

    function LogoutButton(props) {
      return (
        <button onClick={props.onClick}>
          Logout
        </button>
      );
    }


    const isLoggedIn = this.state.isToggleOn
    let buttonText
    if (isLoggedIn) {
      buttonText = <LogoutButton onClick={this.handleLoginOut} />
    } else {
      buttonText = <LoginButton onClick={this.handleLoginIn} />
    }
    const parameter = "我是一个参数"
    function ListItem(props) {
      // 正确！这里不需要指定 key：
      return <li>{props.value}</li>;
    }

    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem key={number.toString()} value={number} />

      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }
    const numbers = [1, 2, 3, 4, 5];
    const arr = [1, 2, 3, 4, 5]
    const listArr = arr.map((num) =>
      <p id={num.id}>{num}</p>
    )
    return (
      <div>
        <a href='#/'>回到home</a>
        <a style={{ marginLeft: 10, marginRight: 10 }} href='#/' onClick={stopClick}>阻止事件发生</a>
        <button onClick={getData}>获取数据</button>
        <button onClick={this.post}>发送数据</button>
        <button onClick={this.transmit.bind(this, parameter)}>bind作用</button>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>{this.state.num}</button>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <Greeting mystate={isLoggedIn} />
        {buttonText}
        {listArr}
        <ul>
          {numbers.map((num) =>
            <ListItem key={num.toString()}
              value={num} />
          )}
        </ul>
        <NumberList numbers={numbers} />,
        <Welcome name="sara" />
        <input type="text" ref={this.myRef} />
        <input type="button" value="focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}

export default Boot