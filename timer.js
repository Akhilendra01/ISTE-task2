const finaltime=new Date("June 21, 2022 11:30:00").getTime();

var timerFunc=setInterval(function(){
    let currtime=new Date().getTime();
    let timeleft=finaltime-currtime;
    let days=Math.floor(timeleft/(1000*60*60*24));
    let hrs=Math.floor((timeleft%(1000*60*60*24))/(1000*60*60));
    let min=Math.floor((timeleft%(1000*60*60))/(1000*60));
    let sec=Math.floor((timeleft%(1000*60))/1000);

    document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hrs").innerHTML = hrs + " Hours";
    document.getElementById("min").innerHTML = min + " Minutes";
    document.getElementById("sec").innerHTML = sec + "  Seconds";
    if (timeleft < 0) {
        document.getElementById("days").innerHTML = ""
        document.getElementById("hrs").innerHTML = "TIME OVER"
        document.getElementById("min").innerHTML = ""
        document.getElementById("sec").innerHTML = " "
        clearInterval(timerfunc);
    }
    
}, 1000);