import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData(`${window.location.href}data.json`);
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.label}</li>)}
      </ul>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  fetchData: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
};

ItemList.defaultProps = {
  hasErrored: false,
  isLoading: false,
};

export default ItemList;
