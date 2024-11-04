const hamBtn = document.querySelector("#nav-btn")
const navLinks = document.querySelector("#nav-links")
const navClose = document.querySelector("#nav-close")

hamBtn.addEventListener("click",()=>{
    navLinks.classList.replace("hidden","flex")

})
navClose.addEventListener("click",()=>{

    navLinks.classList.replace("flex","hidden")
})