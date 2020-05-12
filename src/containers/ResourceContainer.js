import { connect } from 'react-redux';
import Resource from '../components/Resource';
import { changeResource, selectResource } from '../modules/resource';

const mapStateToProps = state => {
  return {
    resource: state.resource,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (category, index, value) => {
      if (value >= 0) {
        dispatch(changeResource(category, index, value));
      }
    },
    onSelect: value => {
      dispatch(selectResource(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
