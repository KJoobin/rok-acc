export default function(str) {
  if (typeof str === 'number') {
    str = str.toString();
  } else if (typeof str !== 'string') {
    console.error(
      'separate helper function argument type are "number" of "string" '
    );
    return;
  }
  if (str.length < 4) {
    return str;
  }
  let index = 0;
  let separateStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (Math.floor(index / 3) === index / 3 && index !== 0) {
      separateStr = ',' + separateStr;
    }
    separateStr = str[i] + separateStr;
    index += 1;
  }
  return separateStr;
}
