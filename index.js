const cardWrapper = document.getElementById("card-wrapper");
const closeSideBar = document.getElementById("close-side-bar")
const menuBar = document.getElementById("menu-bar")

menuBar.addEventListener("click", function(){
    document.querySelector(".side-bar").style.display = "block"
})

closeSideBar.addEventListener("click", function() {
    document.querySelector(".side-bar").style.display = "none"
})

cardWrapper.addEventListener("click", revealAnswer)

function revealAnswer(e) {
    const faPlusIcons = document.getElementsByClassName("fa-plus")
    const faqAnswers = document.getElementsByClassName("faq-answers")
    const faPlus = e.target.classList.contains("fa-plus")
    const faMinus = e.target.classList.contains("fa-minus")
    if (faPlus) {
        for (let faqAnswer of faqAnswers) {
            faqAnswer.classList.remove("reveal")
        }
        for (let faPlusIcon of faPlusIcons) {
            faPlusIcon.style.display = "block"
            faPlusIcon.nextElementSibling.style.display = "none"
        }
        e.target.parentElement.nextElementSibling.classList.add("reveal")
        e.target.style.display = "none"
        e.target.nextElementSibling.style.display = "block"
    } else if (faMinus) {
        e.target.parentElement.nextElementSibling.classList.remove("reveal")
        e.target.style.display = "none"
        e.target.previousElementSibling.style.display = "block"
    }
    // console.log(e.target.parentElement.nextElementSibling)
}