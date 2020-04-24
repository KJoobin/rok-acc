import Speed from '../components/Speed';
import { connect } from 'react-redux';
import { changeAcc } from '../actions/index';

const mapStateToProps = state => {
  return {
    acc: state.changeAcc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (category, index, e) => {
      if (e.target.value >= 0) {
        dispatch(changeAcc(category, index, e.target.value));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Speed);
