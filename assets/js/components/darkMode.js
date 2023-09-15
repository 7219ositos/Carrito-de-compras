function darkMode() {
    const btnDKM = document.querySelector(".btn--darkmode");
    const bodydiv = document.querySelector(".body");
    const btns = document.querySelector(".bx")
    btnDKM.addEventListener("click",function (event) {
        bodydiv.classList.toggle("mode--dark");
    })
    btnDKM.addEventListener("click",function (event) {
        btns.classList.toggle("mode--dark");
    })
}
export default darkMode;