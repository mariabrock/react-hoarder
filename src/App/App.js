import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';

import './App.scss';

import MyNavbar from '../Components/shared/MyNavbar/MyNavbar';
// import Home from '../Components/pages/Home/Home';
import Auth from '../Components/pages/Auth/Auth';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <MyNavbar authed={authed} />
        <Auth path="/auth" exact component={Auth} authed={authed} />
        {/* <Home path="/" exact component={Home} authed={authed} /> */}
      </div>
    );
  }
}

export default App;
