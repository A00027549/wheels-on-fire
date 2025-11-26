let days = 10;
let hours = 20;
let minutes = 60;
let seconds = 60;

window.addEventListener("DOMContentLoaded",(ev)=>{
    const dayCont = document.getElementById("day-text")
    const hourCont = document.getElementById("hour-text")
    const minuteCont = document.getElementById("minute-text")
    const secondCont = document.getElementById("second-text")

    setInterval(()=>{
        seconds--;
        if (seconds == 0) {seconds = 59;minutes--;}
        if (minutes == 0) {minutes = 59;hours--;}
        if (hours == 0) {hours = 23;days--;}
        dayCont.innerText = days.toString()
        hourCont.innerText = hours.toString()
        minuteCont.innerText = minutes.toString()
        secondCont.innerText =seconds.toString()
    }, 1000);
})