module.exports = function check(str, bracketsConfig) {
  let stack = [];
      
  if (str.length % 2 !== 0) {
    return false
  }
    for (let i = 0; i < str.length; i++) {
        for (let n = 0; n < bracketsConfig.length; n++) {
            if (stack[stack.length - 1] == bracketsConfig[n][0] && str[i] == bracketsConfig[n][1]) {
              stack.pop();
            } else if (str[i] == bracketsConfig[n][0]) {
              stack.push(str[i]);
            }
        }
    } if (stack.length == 0) {
      return true;
    } return false;
}

