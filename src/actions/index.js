export const CHANGE_ACC = 'CHANGE_ACC';
export const SET_SPEED_INITIAL = 'SET_SPEED_INITIAL';

export function changeAcc(category, index, value) {
  return {
    type: CHANGE_ACC,
    category,
    index,
    value,
  };
}

export function setSpeedInitial(data) {
  return {
    type: SET_SPEED_INITIAL,
    data,
  };
}
