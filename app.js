document.getElementById("burger").addEventListener("click", () => {
    document.getElementById("navigation").classList.toggle("navPop");
    document.querySelector("main").classList.toggle("navIsOpen");
    document.getElementById("burger").classList.toggle("fa-bars");
    document.getElementById("burger").classList.toggle("fa-times");
})