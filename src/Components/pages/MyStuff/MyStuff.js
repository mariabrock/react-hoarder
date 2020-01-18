import React from 'react';
// import { Link } from 'react-router-dom';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';
import Items from '../../shared/Items/Items';
import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    itemsData.getMyStuffByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('error from get items', err));
  }

  getItems = () => {
    itemsData.getMyStuffByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('error from get items', err));
  }

  componentDidMount() {
    this.getItems();
  }

  deleteItem = (itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error('error deleting item', err));
  }

  render() {
    return (
        <div className="MyStuff">
            <h1>My Stuff Page</h1>
            <div className="mystuff d-flex flex-wrap">
                {this.state.items.map((item) => (<Items key={item.id} item={item} deleteItem={this.deleteItem} />))}
            </div>
        </div>
    );
  }
}

export default MyStuff;
