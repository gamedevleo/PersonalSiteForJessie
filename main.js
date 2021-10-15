// Background Animation
const bgEl = document.querySelector(".lm-animated-bg");

document.addEventListener('mousemove',e=>{
  let x = e.clientX;
  let y = e.clientY;

  bgEl.style.setProperty("background-position","calc( 50% + " + x*-0.008 + "px ) calc( 50% + " + y*-0.008 + "px )");
})


// Homepage Animation
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

// Bootstrap Navbar tooltips js code
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
})

var navItems = document.querySelectorAll("html body .navbar .list-group .list-group-item");

navItems.forEach(item=>{
  item.addEventListener("click",()=>{
    navItems.forEach(each=> each.firstElementChild.firstElementChild.classList.remove("active"));
    item.firstElementChild.firstElementChild.classList.add("active");
  })
})
