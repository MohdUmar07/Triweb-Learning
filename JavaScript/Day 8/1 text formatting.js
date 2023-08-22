const str = "India";
console.log(str);

const strA = 'India';
console.log(strA);

const strB = `India`;
console.log(strB);

const des = '"India" is my country';
const des1 = "'India' is my country";
const des2 = "India is my" + ' "country"';
const des3 = "'India' is my \"country\"";
console.log(des,'\n',des1 ,'\n',des2,'\n',des3);

const des4 = '"India" is my country \n I love my country';
const des5 =   `"India" is my country 
I love my country`; // we can change line without using `----` 
console.log(des4,'\n',des5);            
