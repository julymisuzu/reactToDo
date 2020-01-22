import React from 'react';

export const Login = React.createClass({
  render: function () {
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
              <button className='button'>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Login;
