import Body from '../components/Body';
import { connect } from 'react-redux';
import { setSpeedInitial, setResourceInitial } from '../actions/index';

const mapStateToProps = state => {
  return {
    acc: state.changeAcc,
    resource: state.changeResource,
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
