import Speed from '../components/Speed';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    acc: state.acc,
  };
};

export default connect(mapStateToProps)(Speed);
