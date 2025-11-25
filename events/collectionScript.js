
/**
 * 
 */
const ImageList = [
    {carImage:"car-sel-1",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-2",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-3",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-4",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-5",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-7",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-8",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-9",backgroundImage:"",themeColour:""},
    {carImage:"car-sel-10",backgroundImage:"",themeColour:""}
]

let counter = 0;

window.addEventListener("DOMContentLoaded", (ev)=>{
    const carImageCont = document.getElementById("car-display");
    const carBackgroundCont = document.getElementById("car-background");
    setInterval(()=>{
        //change the background image#
        carImageCont.style.backgroundImage = `url(../assets/${ImageList[counter].carImage}.png)`
        console.log(carImageCont.style.backgroundImage)
        carBackgroundCont.style.backgroundColor = ""
        counter = counter == ImageList.length - 1 ? 0 : counter + 1;
    }, 3000);
})