/* ===================================
   3ZOZ Trading
   JavaScript Part 1
=================================== */


// Page Loaded

document.addEventListener("DOMContentLoaded",()=>{


console.log("3ZOZ Trading Website Loaded");



/* Header Scroll Effect */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,.98)";

    }else{

        header.style.background = "rgba(255,255,255,.95)";

    }


});



});
