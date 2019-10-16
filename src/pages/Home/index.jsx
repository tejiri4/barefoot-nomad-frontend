import React, { Component } from "react";
import { connect } from "react-redux";

// actions
import { sayHelloAction } from "../../store/actions/sayHelloAction";

class Home extends Component {
  componentDidMount() {
    this.props.sayHello();
  }

  render() {
    return <div>{this.props.hello.message}</div>;
  }
}

const mapStateToProps = state => ({ hello: state.hello });

const mapDispachToProps = dispatch => {
  return {
    sayHello: () => dispatch(sayHelloAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Home);
