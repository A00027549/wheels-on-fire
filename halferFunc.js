

const turnableData =[{
    heading: "The Sleekest Cars",
    body: ""
}]
/** 
 * @param {{id: number, reference: HTMLElement}} elemData
*/
const resizeHalfer = (elemData)=>{
    const widenedTurnable = document.getElementById("widened-turnable");
    widenedTurnable.style.display = "flex";
    widenedTurnable.style.background = `linear-gradient(to bottom, #00000063, #000000),${elemData.reference.style.backgroundImage }`;
    widenedTurnable.style.backgroundSize = "cover";
    widenedTurnable.style.backgroundPosition = "center"
    document.body.style.overflow = "hidden"
}

const removeTurnable = ()=>{
    const widenedTurnable = document.getElementById("widened-turnable");
    widenedTurnable.style.display = "none";
    document.body.style.overflow = "auto"
}