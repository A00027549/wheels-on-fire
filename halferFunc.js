

const turnableData = [
  {
    heading: "The Fastest Cars",
    body: "Experience pure velocity with machines built to shatter speed limits. These cars redefine acceleration and top speed — a showcase of engineering precision and raw power."
  },
  {
    heading: "The Coolest Cars",
    body: "Bold designs, innovative features, and undeniable presence. These cars turn heads wherever they go, blending technology, luxury, and attitude into one irresistible package."
  },
  {
    heading: "The Sleekest Cars",
    body: "Aerodynamic silhouettes and flawless craftsmanship. These cars are the embodiment of style in motion, designed to glide through the air with elegance and grace."
  },
  {
    heading: "The Cleanest Cars",
    body: "Sustainable innovation meets performance. These electric and eco-friendly cars offer zero emissions without compromising on luxury, comfort, or cutting-edge design."
  }
];

/** 
 * @param {{id: number, reference: HTMLElement}} elemData
*/
const resizeHalfer = (elemData)=>{
    const widenedTurnable = document.getElementById("widened-turnable");
    widenedTurnable.style.display = "flex";
    widenedTurnable.style.background = `linear-gradient(to bottom, #00000063, #000000),${elemData.reference.style.backgroundImage }`;
    widenedTurnable.style.backgroundSize = "cover";
    widenedTurnable.style.backgroundPosition = "center"
    const turnableheader = document.getElementById("in-turnable-header")
    turnableheader.innerHTML = turnableData[elemData.id - 1 ].heading
    const turnablePara = document.getElementById("in-turnable-p")
    turnablePara.innerHTML = turnableData[elemData.id - 1].body
    document.body.style.overflow = "hidden"
}

const removeTurnable = ()=>{
    const widenedTurnable = document.getElementById("widened-turnable");
    widenedTurnable.style.display = "none";
    document.body.style.overflow = "auto"
}