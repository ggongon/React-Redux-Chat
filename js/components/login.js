import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


export class Login extends Component {

  loginUser(event) {
    event.preventDefault();
    // update the state.authenticated
    this.props.authenticate(true);
  }

  test() {
    this.props.spy && this.props.spy();
  }

  componentWillUpdate(nextProps) {
    if(nextProps.authenticated) {
      this.context.router.history.push("/chat");
    }
  }

  render() {
    return (
      <div id="loginContainer" className="flex absCenter">
        <form  className="loginContent flex absCenter col" onSubmit={this.loginUser.bind(this)}>
          <input type="text" name="login" placeholder="Login"/>
          <input type="password" name="password" placeholder="Password"/>
          <button type="submit" name="submit" onClick={this.test.bind(this)}>Log in</button>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps({authenticated}) {
  return {authenticated}
}

export default connect(mapStateToProps, actions)(Login);
