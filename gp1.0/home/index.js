// star pattern
let stars = document.querySelectorAll(".ratings-wrapper span");
let ratings = [];

for(let star of stars){
    star.addEventListener("click",function(){
    this.setAttribute("data-clicked",true);
    });
}

// pop Login Page

// show from popup
const showPopupBtn = documnet.querySelector(".login-btn");
showPopupBtn.addEventListener("click" ,() => {
   document.body.classList.toggle("show-popup");
});

// Hide from popup
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

const formPopup= documnet.querySelector(".form-popup");
const loginSignupLink = document.querySelector("form-box .bottom-link a");
loginSignupLink.forEach(link => {
  link.addEventListener("click",(e)=>{
    e.preventDefault();
    formPopup.classList[link.id === "signuplink" ? 'add' : 'remove']("show-signup");
  });
});
