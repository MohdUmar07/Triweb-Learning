/*
- Hexadecimal escape sequences =>'\x7A'
- Unicode scape sequences => 'u007A'
*/

const chr = '\x7A';
console.log("Hexadecimla char ", chr)

const chr1 = '\u007A';
console.log("Hexadecimla char ", chr1)

if(chr == chr1){
    console.log("It is equal");
}