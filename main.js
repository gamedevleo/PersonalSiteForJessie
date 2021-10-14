// Background Animation
const bgEl = document.querySelector(".lm-animated-bg");

document.addEventListener('mousemove',e=>{
  let x = e.clientX;
  let y = e.clientY;

  bgEl.style.setProperty("background-position","calc( 50% + " + x*-0.005 + "px ) calc( 50% + " + y*-0.005 + "px )");
})


const subtitle1El = document.querySelector(".subtitle1");
const subtitle2El =document.querySelector(".subtitle2");

const toggleAnimationClass = () => {
  subtitle1El.classList.toggle("animate__animated");
  subtitle1El.classList.add("display-none")
  
  setTimeout(() => {
    subtitle2El.classList.toggle("animate__animated");
  }, 3000);

  setTimeout(toggleAnimationClass, 3000);
};

toggleAnimationClass();

