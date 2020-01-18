import PropTypes from 'prop-types';

const itemShape = PropTypes.shape({
  id: PropTypes.string,
  itemName: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemDescription: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { itemShape };
