"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let burger = document.querySelector("#burger_menu");
    let burger_button = document.querySelector("#burger_button");
    let main_menu = document.querySelector("#main_menu");
    let top_block = document.querySelector(".top_block");
    let container = document.querySelector(".container");
    let pricing_block = document.querySelector(".pricing_block");
    let footer = document.querySelector(".footer");
    let opened = false;
    burger.onclick = function () {
        if (opened == false) {
            main_menu.style.marginLeft = "0";
            burger_button.style.color = "#fff";
            top_block.style.display = "none";
            container.style.display = "none";
            pricing_block.style.display = "none";
            footer.style.display = "none";
            opened = true;
        } else {
            main_menu.style.marginLeft = "-100%";
            burger_button.style.color = "#22252e";
            top_block.style.display = "block";
            container.style.display = "grid";
            pricing_block.style.display = "block";
            footer.style.display = "block";
            opened = false;
        }
    };
});
