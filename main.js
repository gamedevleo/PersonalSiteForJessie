const bgEl = document.querySelector(".lm-animated-bg");

document.addEventListener('mousemove',e=>{
  let x = e.clientX;
  let y = e.clientY;

  bgEl.style.setProperty("background-position","calc( 50% + " + x*-0.005 + "px ) calc( 50% + " + y*-0.005 + "px )");
})