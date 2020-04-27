export const CHANGE_ACC = 'CHANGE_ACC';
export const SET_SPEED_INITIAL = 'SET_SPEED_INITIAL';
export const CHANGE_RESOURCE = 'CHANGE_RESOURCE';
export const SELECT_RESOURCE = 'SELECT_RESOURCE';
export const SET_RESOURCE_INITIAL = 'SET_RESOURCE_INITIAL';

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

export function changeResource(category, index, value) {
  return {
    type: CHANGE_RESOURCE,
    category,
    index,
    value,
  };
}

export function selectResource(value) {
  return {
    type: SELECT_RESOURCE,
    value,
  };
}

export function setResourceInitial(data) {
  return {
    type: SET_RESOURCE_INITIAL,
    data,
  };
}
