import React from 'react';
import { Link } from 'react-router-dom';
import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    return (
        <div className="MyStuff">
            <h1>My Stuff Page</h1>
            <div className="mystuff d-flex flex-wrap">
                <Link className="btn btn-dark" to="/stuff/12345/edit"onClick={this.editClickEvent}>Edit</Link>
                <Link className="btn btn-light" to="/stuff/12345"onClick={this.singleClickEvent}>Single</Link>
            </div>
        </div>
    );
  }
}

export default MyStuff;
