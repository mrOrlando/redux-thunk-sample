import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends Component {
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
        {this.props.items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            removeItem={this.props.removeItem}
          />
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  fetchData: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
};

List.defaultProps = {
  hasErrored: false,
  isLoading: false,
};

export default List;
