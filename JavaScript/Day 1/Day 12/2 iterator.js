function makeRangeIterator(start = 0, end = Infinity, step = 1){
    let nextIndex = start;
    let iterationCount = 0;

    const reangeIterator = {
        next : function(){
            let result;
            if (nextIndex < end){
                result = { value: nextIndex, done: false}
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true}
        }
    };
    return reangeIterator;
}

const myRangeIterator  =makeRangeIterator(0,10);
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());
console.log(myRangeIterator.next());