$(document).ready(function () {
    const sideBtn = $("#side_btn")
    const navMenu = $(".nav_menu")

    sideBtn.click(function () {
        navMenu.toggleClass("side_menu");
    });

    const hideBtn = $(".hide_btn")

    hideBtn.click(function () {
        navMenu.toggleClass("side_menu");
    })
})