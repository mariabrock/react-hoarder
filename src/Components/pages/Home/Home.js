import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
                <div className="Home">
                    <h1>Home Page</h1>
                    <div className="boards d-flex flex-wrap">
                      {/* {this.state.boards.map((board) => (<Board key={board.id} board={board} deleteBoard={this.deleteBoard} />))} */}
                    </div>
                </div>
    );
  }
}

export default Home;
