import { combineReducers } from 'redux';
import {
  CHANGE_ACC,
  SET_SPEED_INITIAL,
  CHANGE_RESOURCE,
  SET_RESOURCE_INITIAL,
} from '../actions/index';

const initialArray = ['', '', '', '', '', '', '', '', '', '', '', '', ''];

const initialAccState = {
  constructor: { title: '건설', data: initialArray.slice() },
  training: { title: '훈련', data: initialArray.slice() },
  research: { title: '연구', data: initialArray.slice() },
  treatment: { title: '치료', data: initialArray.slice() },
  general: { title: '일반', data: initialArray.slice() },
};

const initialResouceState = {
  food: { title: '식량', data: initialArray.slice(0, 7) },
  wood: { title: '나무', data: initialArray.slice(0, 7) },
  rock: { title: '돌', data: initialArray.slice(0, 7) },
  gold: { title: '금화', data: initialArray.slice(0, 7) },
  choice: { title: '선택', data: initialArray.slice(0, 4) },
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
function changeResource(state = initialResouceState, action) {
  switch (action.type) {
    case CHANGE_RESOURCE:
      const newState = {};
      const array = state[action.category].data.slice();
      newState[action.category] = { ...state[action.category] };
      array[action.index] = action.value;
      newState[action.category].data = array;
      return { ...state, ...newState };
    case SET_RESOURCE_INITIAL:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default combineReducers({ changeAcc, changeResource });
