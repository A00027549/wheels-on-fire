let pointer = 0;
let accumulator = 0;
let startY = 0;
const allBoxes = document.querySelectorAll(".info-section-container");

window.addEventListener("DOMContentLoaded",(ev)=>{
    // get all of the required parts
    setInterval(()=>{
        //set only the box that is currently being pointed to
        refreshSections();
        pointer = pointer >= allBoxes.length - 1 ? 0 : pointer + 1;
    },5000)
});


// desktop wheel
window.addEventListener("wheel", ev => {
    handleScroll(ev.deltaY, ev);
}, { passive: false });

// mobile touch
window.addEventListener("touchstart", ev => {
    startY = ev.touches[0].clientY;
}, { passive: true });

window.addEventListener("touchmove", ev => {
    const y = ev.touches[0].clientY;
    const deltaY = startY - y;   // emulate wheel delta
    startY = y;

    handleScroll(deltaY, ev);
}, { passive: false });

function handleScroll(deltaY, ev) {
    accumulator = Math.max(0, accumulator + deltaY);
    let currentSection = Math.floor(accumulator / 500);

    if (currentSection < allBoxes.length) {
        ev.preventDefault();

        if (currentSection < 0) currentSection = 0;

        if (pointer !== currentSection) {
            pointer = Math.min(currentSection, allBoxes.length - 1);
            refreshSections();
        }
    }
}



const refreshSections = () => {
    for (let index = 0; index < allBoxes.length; index++) {
        if (index == pointer) allBoxes[index].style.display = "flex";
        else  allBoxes[index].style.display = "none";
    }
}

const add = ()=>{
    pointer = pointer >= allBoxes.length - 1 ? 0 : pointer + 1;
    pointer = pointer + 1
    refreshSections();
}

const subtract = ()=>{
    pointer = pointer <= 0 ? allBoxes.length - 1 : pointer - 1;
    refreshSections();
}