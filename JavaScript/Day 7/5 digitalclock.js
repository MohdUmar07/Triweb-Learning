(function digitalClock(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();

    let hour12 = hour>12? hour-12 : hour;
    if(hour == 0){
        hour12 = "12";
    }

    let time ="";
    time += hour12< 10?"0"+hour12:":"+hour12;
    time += minutes < 10?"0"+minutes:":"+minutes;
    time += sec < 10?"0"+sec:":"+sec;
    time += hour12>12? " PM" : " AM";
    
    console.log(time);
})()


// console.log(digitalClock());