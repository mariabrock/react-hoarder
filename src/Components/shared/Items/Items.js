import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './Items.scss';
import itemShape from '../../../helpers/propz/itemShape';

class Items extends React.Component {
    static propTypes = {
      item: itemShape.itemShape,
    }

    render() {
      const { item } = this.props;
      return (
        <div className="Item col-4">
            <div className="card">
                <div className="card-body">
                <img src={item.itemImage} className="card-img-top" alt="" />
                <h5 className="card-title">{item.itemName}</h5>
                <p className="card-text">{item.itemDescription}</p>
                </div>
            </div>
        </div>
      );
    }
}

export default Items;
