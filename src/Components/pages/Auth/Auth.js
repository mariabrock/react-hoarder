import React from 'react';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
            <div className="Auth">
        <h1>Auth Page</h1>
        <button className="btn btn-danger" onClick={this.loginClickEvent}>Login With Google</button>
    </div>
    );
  }
}

export default Auth;
