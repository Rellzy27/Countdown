// countdown

//set deadline
let deadline = new Date("jan 1, 2024").getTime();

//repeat
let x = setInterval(function(){
    
    //get today's date
    let now = new Date().getTime();
    //calculate the time remaining
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    //output
    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    //if time is less than 0
    if(t<0){
        clearInterval(x);
        document.getElementById("time").innerHTML = "Times Up";
    }
}, 1000);