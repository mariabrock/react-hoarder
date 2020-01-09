import React from 'react';
import './New.scss';

class New extends React.Component {
  render() {
    return (
        <div className="New">
            <h1>New Items</h1>
            <div className="boards d-flex flex-wrap">
            </div>
        </div>
    );
  }
}

export default New;
