$(document).ready(function () {
    "use strict";

    $(".navigation_block_list_item").click(function() {
        var attr = $(this).attr("data-target");
        $("section").removeClass("active");
        $("."+attr).addClass("active");
    });

    $(".dropdown ul li").click(function() {
        var attr = $(this).attr("data-target");
        $("section").removeClass("active");
        $("."+attr).addClass("active");
        $(".dropdown").removeClass("active");
    });

    $(".dropdown_close").click(function() {
        $(".dropdown").removeClass("active");
    });

    $(".main_block_top_btn").click(function() {
        $(".dropdown").addClass("active");
    });

    $(".main_block_content_img_btns_buy").click(function() {
        $("section").removeClass("active");
        $(".buy").addClass("active");
    });

    $(".main_block_content_text_btns_buy").click(function() {
        $("section").removeClass("active");
        $(".buy").addClass("active");
    });

    $(".main_block_content_img_btns_more").click(function() {
        $("section").removeClass("active");
        $(".about").addClass("active");
    });

    $(".main_block_content_text_btns_more").click(function() {
        $("section").removeClass("active");
        $(".about").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_main_next").click(function() {
        $("section").removeClass("active");
        $(".about").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_about_prev").click(function() {
        $("section").removeClass("active");
        $(".main").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_about_next").click(function() {
        $("section").removeClass("active");
        $(".buy").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_buy_prev").click(function() {
        $("section").removeClass("active");
        $(".about").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_buy_next").click(function() {
        $("section").removeClass("active");
        $(".read").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_read_prev").click(function() {
        $("section").removeClass("active");
        $(".buy").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_read_next").click(function() {
        $("section").removeClass("active");
        $(".contacts").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_contacts_prev").click(function() {
        $("section").removeClass("active");
        $(".read").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_contacts_next").click(function() {
        $("section").removeClass("active");
        $(".help").addClass("active");
    });

    $(".main_block_top_nav_numbers_next_help_prev").click(function() {
        $("section").removeClass("active");
        $(".contacts").addClass("active");
    });



    
    

});