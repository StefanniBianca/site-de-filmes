let show = true;

const menu = document.querySelector(".menu")
const menu2 = menu.querySelector(".menu2")

menu2.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menu.classList.toggle("on", show)
    show = !show;
})