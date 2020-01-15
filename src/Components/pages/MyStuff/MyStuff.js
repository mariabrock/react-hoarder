import React from 'react';
import { Link } from 'react-router-dom';

import itemData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';
import Items from '../../shared/Items/Items';
import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    itemData.getMyStuffByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('error from get items', err));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
        <div className="MyStuff">
            <h1>My Stuff Page</h1>
                <Link className="btn btn-dark" to="/stuff/12345/edit"onClick={this.editClickEvent}>Edit</Link>
                <Link className="btn btn-light" to="/stuff/12345"onClick={this.singleClickEvent}>Single</Link>
            <div className="mystuff d-flex flex-wrap">
                {this.state.items.map((item) => (<Items key={item.id} item={item} />))}
            </div>
        </div>
    );
  }
}

export default MyStuff;
