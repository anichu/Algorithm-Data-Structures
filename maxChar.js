// Given a string return the character that is most
// commonly used in the string.
// Examples
// maxChar('abccdfsdkldgscccc') ==='C'
// maxChar('apple1221241111111')==='1'

function maxChar(str) {
  let ar = str.split('');
  let objAr = {};
  for (let i = 0; i < ar.length; i++) {
    if (objAr[ar[i]] >= 1) {
      objAr[ar[i]] = objAr[ar[i]] + 1;
    } else {
      objAr[ar[i]] = 1;
    }
  }
  let arr = Object.values(objAr);
  // let key = Object.keys(objAr);
  let max = Math.max(...arr);
  // find the character from object
  let char = Object.keys(objAr).find((key) => objAr[key] === max);
  console.log(char);

  // console.log(max);
  // console.log(key);

  // console.log(objAr);
}

maxChar('1232323333');
