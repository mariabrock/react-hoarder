import React from 'react';
import PropTypes from 'prop-types';
// import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
    static propTypes = {
      authed: PropTypes.bool,
    }

    render() {
      const { authed } = this.props;
      const buildNavbar = () => {
        if (authed) {
          return (
            <div className="MyNavbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="navbar-brand" to="/">Pinterest</div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                </nav>
            </div>
          );
        }
        return (<ul className="navbar-nav ml-auto"></ul>);
      };

      return (
        <div className="MyNavbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="navbar-brand" to="/">Pinterest</div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                { buildNavbar() }
                </div>
            </nav>
        </div>
      );
    }
}

export default MyNavbar;
