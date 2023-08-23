let newMap = new Map();
newMap.set("name","Anas");
console.log(newMap);//Map(1) { 'name:' => 'Anas' }

newMap.set("Address","Gonda");
console.log(newMap);//Map(2) { 'name:' => 'Anas', 'Address:' => 'Gonda' }


newMap.set("Mobile",1234567890);
console.log(newMap);/*Map(3) {
    'name:' => 'Anas',
    'Address:' => 'Gonda',
    'Mobile:' => 1234567890conso
  }*/


  console.log("Number of Element in Map is ",newMap.size);

  const stdName = newMap.get('name');
  console.log("Name from Map is ",stdName);

  newMap.set(1,"First");
  console.log(newMap);

 let valOf1 =newMap.get(1);
 console.log("value of 1 is",valOf1); 