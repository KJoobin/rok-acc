import { connect } from 'react-redux';
import Resource from '../components/Resource';
import { changeResource } from '../actions/index';

const mapStateToProps = state => {
  return {
    resource: state.changeResource,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (category, index, value) => {
      if (value >= 0) {
        dispatch(changeResource(category, index, value));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
