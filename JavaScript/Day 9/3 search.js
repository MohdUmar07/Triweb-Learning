let regex = /\w/g;

let regex1 = /[^\w\s]/g;
let str = "Hi I am here. I am attending a meeting on skype.";

let rsltIndex = str.search(regex);
console.log(rsltIndex);
console.log(str[rsltIndex]);




let rsltIndex1 = str.search(regex1);
console.log(rsltIndex1);
console.log(str[rsltIndex1]);