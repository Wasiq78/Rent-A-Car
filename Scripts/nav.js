// Nav Animation on Scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('nav-scroll', window.scrollY > 0)
  })

// Making Navbar For Small Screens
let navmenu = document.querySelector(".menu");
let navOpenBtn = document.getElementById("nav-toggle-open");
let navCloseBtn = document.getElementById("nav-toggle-close");

navOpenBtn.addEventListener("click", function(){
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display= "block";
  navmenu.style.display= "flex";
})

navCloseBtn.addEventListener("click", function(){
  navCloseBtn.style.display = "none";
  navOpenBtn.style.display= "block";
  navmenu.style.display= "none";
})