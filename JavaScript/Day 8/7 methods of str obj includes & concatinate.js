const strObj = String("Hi I am here.");

if(strObj.includes('i')){
    console.log("Yes its includes i ");

} else {
    console.log("No its not includes i ");
}


const str = "I'm Goning."
console.log("Ist Way ----",strObj+str);
const str2 = strObj.concat(str);
console.log("IInd way ----",str2);
