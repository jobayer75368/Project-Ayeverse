$(document).ready(function () {
    const sideBtn = $("#side_btn")
    const navMenu = $(".nav_menu")
    const overLay = $("#overlay")

    sideBtn.click(function () {
        navMenu.toggleClass("side_menu");
        overLay.css("display", "block");

    });

    const hideBtn = $(".hide_btn")

    hideBtn.click(function () {
        navMenu.toggleClass("side_menu");
        overLay.css("display", "none");
    })

    $(".engineering_btn").click(function () {
        $(".engineering_img").show()
        $(".exp_img").hide()
        $(".new_img").hide()
    })
    $(".view_all_btn").click(function () {
        $(".all_img").show()
    })
    $(".new_project_btn").click(function () {
        $(".new_img").show()
        $(".exp_img").hide()
        $(".engineering_img").hide()

    })
    $(".exp_btn").click(function () {
        $(".exp_img").show()
        $(".engineering_img").hide()
        $(".new_img").hide()
    })
})