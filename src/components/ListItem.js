import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  font-size: 26px;
  list-style: none;
`;

const Remove = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: #000;

  &:hover {
    color: red;
  }
`;

class ListItem extends Component {
  handleRemoveItem = () => {
    this.props.removeItem(this.props.item.id);
  };

  render() {
    return (
      <Item>
        {this.props.item.label} [
        <Remove onClick={this.handleRemoveItem}>&times;</Remove>
        ]
      </Item>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ListItem;
