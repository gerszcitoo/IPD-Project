$('.mobile-nav').click(function() {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});
const navToggle = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-nav");
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
});