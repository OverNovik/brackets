module.exports = function check(str, bracketsConfig) {
  let stack = [];
    arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let n = 0; n < bracketsConfig.length; n++) {
            if (stack[stack.length - 1] == bracketsConfig[n][0] && arr[i] == bracketsConfig[n][1]) stack.pop();
            else if (arr[i] == bracketsConfig[n][0]) stack.push(arr[i]);
        }
    }
    if (stack.length == 0) {
      return true;
    } return false;
}

