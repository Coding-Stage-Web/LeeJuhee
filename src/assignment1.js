import React, { Component } from "react";

class Assignment1 extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log(
      `getDerivedStateFromProps 함수입니다. 이 함수는 ${props.prop_value}`
    );
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor 함수입니다.");
  }
  componentDidMount() {
    console.log("componentDidMount 함수입니다.");
    this.setState({ tmp_state2: true });
  }
  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate 함수입니다.");
    return state.tmp_state2;
  }
  render() {
    console.log("render 함수입니다.");
    return <h2>[THIS IS LIFE CYCLE FUNCTION]</h2>;
  }
}

export default Assignment1;
