import { combineReducers } from 'redux';
import { CHANGE_ACC, SET_SPEED_INITIAL } from '../actions/index';

const initialArray = ['', '', '', '', '', '', '', '', '', '', '', '', ''];
const initialAccState = {
  constructor: { title: '건설', data: initialArray.slice() },
  training: { title: '훈련', data: initialArray.slice() },
  research: { title: '연구', data: initialArray.slice() },
  treatment: { title: '치료', data: initialArray.slice() },
  general: { title: '일반', data: initialArray.slice() },
};

function changeAcc(state = initialAccState, action) {
  switch (action.type) {
    case CHANGE_ACC:
      const newState = {};
      const array = state[action.category].data.slice();
      newState[action.category] = { ...state[action.category] };
      array[action.index] = action.value;
      newState[action.category].data = array;
      return { ...state, ...newState };
    case SET_SPEED_INITIAL:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default combineReducers({ changeAcc });
