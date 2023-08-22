const countries = String("India, Pakistan, Bangladesh, Nepal, Chaina");
const countriesArr = countries.split(',');

console.log(countriesArr);

countriesArr.forEach((countries)=>{
    console.log(countries," is a country");
})