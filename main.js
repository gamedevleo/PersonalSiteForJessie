$(document).ready(()=>{
    // Background Animation
  $(document).mousemove(e=>{
    let x = e.clientX;
    let y = e.clientY;
    $('.lm-animated-bg').css("background-position","calc( 50% + " + x*-0.008 + "px ) calc( 50% + " + y*-0.008 + "px )");
  })
  // Homepage Animation
  const toggleAnimationClass= () => {
    $('.subtitle1').toggleClass('animate__animated');
    setTimeout(() => {
      $('.subtitle1').toggleClass('display-none');
      $('.subtitle2').toggleClass('animate__animated display-none');
    }, 3000);
    setTimeout(toggleAnimationClass, 3000);
  }
  toggleAnimationClass();
  // Bootstrap Navbar tooltips js code
  var tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(tooltipTriggerEl=> {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  })
  var navItems = $("html body .navbar .list-group .list-group-item").get();
  navItems.forEach(item=>{
    item.addEventListener("click",()=>{
      navItems.forEach(each=> each.firstElementChild.firstElementChild.classList.remove("active"));
      item.firstElementChild.firstElementChild.classList.add("active");
    })
  })
})

