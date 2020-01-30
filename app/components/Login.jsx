import React from 'react';
import * as Redux from 'react-redux';

// Actions
import * as actions from 'actions';

export class Login extends React.Component {
  constructor() {
    super();

    this.onLogin = this.onLogin.bind(this);
  }
  onLogin() {
    const {dispatch} = this.props;

    dispatch(actions.startLogin());
  }
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="grid-x">
          <div className="cell medium-6 large-4 large-offset-4 medium-offset-3">
            <div className="grid-container container callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub account below.
              </p>
              <button className='button' onClick={this.onLogin}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(Login);
