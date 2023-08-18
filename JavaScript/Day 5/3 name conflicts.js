function outer(num){
    let x = 7;

    function inner(x){
        // local has preority 
        let num = 8;
        console.log(x);
        console.log(num);
    }
    inner(12);

}
outer(2);