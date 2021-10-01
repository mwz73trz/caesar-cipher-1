exports.caesarCipher = function (str, num) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    //Test if character is alphabetical, otherwise pass on unchanged.
    if (!/[a-zA-Z]/.test(str[i])) {
      arr[i] = str[i];
      continue;
    }

    // this n value becomes our character code to convert.
    let n = str.charCodeAt(i) + num;

    //lower case character code handling.
    if (str[i] == str[i].toLowerCase()) {
      //this logic rolls through lower case characters until the desired caesar offset is hit for the lower case character
      if (n > 122) {
        while (n > 122) {
          n -= 26;
        }
      } else {
        while (n < 97) {
          n += 26;
        }
      }
    } //upper case character handling
    else {
      if (n > 90) {
        while (n > 90) {
          n -= 26;
        }
      } else {
        while (n < 65) {
          n += 26;
        }
      }
    }
    //return the ciphered letter to the array
    arr[i] = String.fromCharCode(n);
  }
  return arr.join("");
};
