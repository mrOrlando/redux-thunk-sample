import { connect } from 'react-redux';
import ItemList from '../components/List';
import {
  fetchData as itemsFetchData,
  removeItem as itemsRemoveItem,
} from '../modules/items';

const mapStateToProps = state => ({
  items: state.items.data,
  hasErrored: state.items.hasErrored,
  isLoading: state.items.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
  removeItem: itemId => dispatch(itemsRemoveItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
