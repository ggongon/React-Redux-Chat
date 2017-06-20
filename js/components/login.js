import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


export class Login extends Component {

  loginUser(event) {
    event.preventDefault();
    // update the state.username
    this.props.authenticate(this.refs.login.value);
  }

  test() {
    this.props.spy && this.props.spy();
  }

  componentWillUpdate(nextProps) {
    if(nextProps.username) {
      this.context.router.history.push("/chat");
    }
  }

  render() {
    return (
      <div id="loginContainer" className="flex absCenter">
        <form  className="loginContent flex absCenter col" onSubmit={this.loginUser.bind(this)}>
          <input type="text" ref="login" name="login" placeholder="Username"/>
          {/* <input type="password" ref="password" name="password" placeholder="Password"/> */}
          <button type="submit" name="submit" onClick={this.test.bind(this)}>Chat now!</button>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps({username}) {
  return {username}
}

export default connect(mapStateToProps, actions)(Login);
