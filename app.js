const mainSection = document.querySelector(".main_section");
const thanksSection = document.querySelector(".thank_you");
const submitBtn = document.getElementById("submitBtn");
const numbers = document.querySelectorAll(".btn");
const rate = document.getElementById("rate");

submitBtn.addEventListener("click", () => {
    thanksSection.classList.remove("hidden");
    mainSection.style.display = 'none';
})

numbers.forEach((element) => {
    element.addEventListener("click", () => {
        rate.innerHTML = element.innerHTML
    })
})