import React from 'react';
import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    return (
        <div className="MyStuff">
            <h1>MyStuff Page</h1>
            <div className="boards d-flex flex-wrap">
            </div>
        </div>
    );
  }
}

export default MyStuff;
