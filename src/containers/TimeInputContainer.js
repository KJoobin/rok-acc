import TimeInput from '../components/TimeInput';
import { connect } from 'react-redux';
import { changeAcc } from '../modules/acc';

const mapDispatchToProps = dispatch => {
  return {
    onChange: (category, index, e) => {
      if (e.target.value >= 0) {
        dispatch(changeAcc(category, index, e.target.value));
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(TimeInput);
