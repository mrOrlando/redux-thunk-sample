import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { itemsFetchData } from '../actions/items';

const mapStateToProps = state => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
