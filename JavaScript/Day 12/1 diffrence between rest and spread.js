function printData(...rest){ // rest operator
    rest.forEach((elem)=>{
        console.log("You sent: ", elem);
    })

    const [fisrtElement] = [...rest]; // Spread operator
    console.log("First Element: ", fisrtElement);
}

printData(1,2,3,4,5,6,7,8,9,10)