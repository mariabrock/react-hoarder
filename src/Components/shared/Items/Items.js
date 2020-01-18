import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Items.scss';
import itemShape from '../../../helpers/propz/itemShape';

class Items extends React.Component {
    static propTypes = {
      item: itemShape.itemShape,
      deleteItem: PropTypes.func,
    }

    deleteItemEvent = (e) => {
      e.preventDefault();
      const { deleteItem, item } = this.props;
      deleteItem(item.id);
    }

    render() {
      const { item } = this.props;
      return (
        <div className="Item col-4">
            <div className="card">
                <div className="card-body">
                <button className="btn btn-danger" onClick={this.deleteItemEvent}>X</button>
                <img src={item.itemImage} className="card-img-top" alt="" />
                <h5 className="card-title">{item.itemName}</h5>
                <p className="card-text">{item.itemDescription}</p>
                <Link className="btn btn-dark" to="/stuff/12345/edit"onClick={this.editClickEvent}>Edit</Link>
                <Link className="btn btn-light" to="/stuff/12345"onClick={this.singleClickEvent}>View Item</Link>
                </div>
            </div>
        </div>
      );
    }
}

export default Items;
