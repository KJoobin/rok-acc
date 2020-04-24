export const CHANGE_ACC = 'CHANGE_ACC';

export function changeAcc(category, index, value) {
  return {
    type: CHANGE_ACC,
    category,
    index,
    value,
  };
}
