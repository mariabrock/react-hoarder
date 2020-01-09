import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
    static propTypes = {
      authed: PropTypes.bool,
    }

    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      const buildNavbar = () => {
        if (authed) {
          return (
            <div className="MyNavbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="navbar-brand" to="/">I Hoard Things</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </nav>
            </div>
          );
        }
        return (<ul className="navbar-nav ml-auto"></ul>);
      };

      return (
        <div className="MyNavbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="navbar-brand" to="/">I Hoard Things</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                { buildNavbar() }
                </div>
            </nav>
        </div>
      );
    }
}

export default MyNavbar;
