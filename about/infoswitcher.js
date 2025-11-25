let pointer = 0;
let max = 0;
const allBoxes = document.querySelectorAll(".info-section-container");
window.addEventListener("DOMContentLoaded",(ev)=>{
    // get all of the required parts
    setInterval(()=>{
        //set only the box that is currently being pointed to
        for (let index = 0; index < allBoxes.length; index++) {
            if (index == pointer) allBoxes[index].style.display = "flex";
            else  allBoxes[index].style.display = "none";
        }
        pointer = pointer >= allBoxes.length - 1 ? 0 : pointer + 1;
    },5000)
})

const add = ()=>{
    console.log("")
    pointer = pointer >= allBoxes.length - 1 ? 0 : pointer + 1;
}
const subtract = ()=>{
    pointer = pointer <= 0 ? allBoxes.length - 1 : pointer - 1;
}