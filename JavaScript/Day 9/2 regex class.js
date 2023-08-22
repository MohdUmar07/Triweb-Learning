let str = "Hi I am here. I am attending a meeting on skype.";
let regx = new RegExp('am');

let result = regx.test(str);
console.log(result)