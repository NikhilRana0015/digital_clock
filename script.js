function displayTime(){
    var currentTime = new Date();


    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var ampm = hours >=12 ? "PM" : "AM";



    hours = hours % 12;

    if (hours === 0){
        hours = 12;
    } 

    if(hours<10){
        hours = "0" + hours;
    }

    if(minutes<10){
        minutes = "0" + minutes;

    }

    if(seconds<10){
        seconds = "0" + seconds;

    }
    var time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").innerHTML = time;
 
}

displayTime();
setInterval(displayTime, 1000);
