let newSet = new Set()

console.log(newSet);

newSet.add(55);
newSet.add(25);
newSet.add(36);
newSet.add(14);

console.log(newSet);

newSet.add(36); // unique elements 

if (newSet.has(36)){
    console.log("Has method is working")
}
console.log("size of newSet",newSet.size);

newSet.delete(36);
console.log(newSet);
console.log("size of newSet",newSet.size);

for (const element of newSet) {
    console.log("Element",element);
}