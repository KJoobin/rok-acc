import Body from '../components/Body';
import { connect } from 'react-redux';
import { setSpeedInitial } from '../modules/acc';
import { setResourceInitial } from '../modules/resource';

const mapStateToProps = state => {
  return {
    acc: state.acc,
    resource: state.resource,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInitial: data => {
      if (data) {
        dispatch(setSpeedInitial(data));
      }
    },
    setResource: data => {
      if (data) {
        dispatch(setResourceInitial(data));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
