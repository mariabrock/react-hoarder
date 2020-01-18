import React from 'react';
import './New.scss';

import itemsData from '../../../helpers/data/itemsData';

class New extends React.Component {
  state = {
    itemName: '',
    itemDescription: '',
    itemImageUrl: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    if (itemId) {
      itemsData.getSingleItem(itemId)
        .then((response) => {
          this.setState({ itemName: response.data.itemName, itemDescription: response.data.itemDescription, itemImageUrl: response.data.itemImage });
        })
        .catch((err) => console.error('error in get item', err));
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  imageUrlChange = (e) => {
    this.setState({ itemImageUrl: e.target.value });
  }

  render() {
    const { itemName, itemDescription, itemImageUrl } = this.state;
    const { itemId } = this.props.match.params;
    return (
        <div className="New">
            <h1>New Stuff</h1>
            <div className="new d-flex flex-wrap">
            <form className="NewItemForm">
              <div className="form-group">
                <label htmlFor="new-item">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="new-item"
                  placeholder="Enter item Name"
                  value={itemName}
                  onChange={this.nameChange}
                  />
                  <label htmlFor="item-description">Item Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="item-description"
                  placeholder="Enter item description"
                  value={itemDescription}
                  onChange={this.descriptionChange}
                  />
                  <label htmlFor="item-imageUrl">Item Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="item-imageUrl"
                  placeholder="Enter item Url"
                  value={itemImageUrl}
                  onChange={this.imageUrlChange}
                  />
                </div>
                { itemId
                  ? <button className="btn btn-dark" onClick={this.editItemEvent}>Update Board</button>
                  : <button className="btn btn-dark" onClick={this.saveItemEvent}>Save Board</button>
                }
            </form>
            </div>
        </div>
    );
  }
}

export default New;
