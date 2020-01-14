import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';

import './App.scss';

import MyNavbar from '../Components/shared/MyNavbar/MyNavbar';
import Auth from '../Components/pages/Auth/Auth';
import Home from '../Components/pages/Home/Home';
import New from '../Components/pages/New/New';
import MyStuff from '../Components/pages/MyStuff/MyStuff';
import Edit from '../Components/pages/Edit/Edit';
import Single from '../Components/pages/Single/Single';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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
        <Router>
          <MyNavbar authed={authed} />
          <Switch>
            <PublicRoute path="/auth" exact component={Auth} authed={authed} />
            <PrivateRoute path="/" exact component={Home} authed={authed} />
            <PrivateRoute path="/stuff/new" exact component={New} authed={authed} />
            <PrivateRoute path="/stuff" exact component={MyStuff} authed={authed} />
            <PrivateRoute path="/stuff/12345/edit" exact component={Edit} authed={authed} />
            <PrivateRoute path="/stuff/12345" exact component={Single} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
