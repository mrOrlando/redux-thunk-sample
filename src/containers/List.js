import { connect } from 'react-redux';
import ItemList from '../components/List';
import { itemsFetchData, removeItem } from '../actions/items';

const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  removeItem: itemId => dispatch(removeItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
