function* makeRangeIterator(start = 0, end = Infinity, step = 1){
    let iterationCount = 0;
    for(let i = start; i < end; i += step){
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
const myGenerator = makeRangeIterator(0,10);
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());