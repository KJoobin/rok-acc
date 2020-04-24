import Speed from '../components/Speed';
import { connect } from 'react-redux';
import { setSpeedInitial } from '../actions/index';

const mapStateToProps = state => {
  return {
    acc: state.changeAcc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInitial: data => {
      if (data) {
        dispatch(setSpeedInitial(data));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Speed);
