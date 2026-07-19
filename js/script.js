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

/* ===================================
   JavaScript Part 2
   Scroll Animations
=================================== */



// Reveal Elements On Scroll


const revealElements = document.querySelectorAll(

    ".service-card, .about-content, .about-image, .price-card, .testimonial-card, .contact-box"

);



const revealOnScroll = ()=>{


    revealElements.forEach((element)=>{


        const elementTop = element.getBoundingClientRect().top;


        const windowHeight = window.innerHeight;



        if(elementTop < windowHeight - 100){


            element.classList.add("fade-up");


        }



    });



};



window.addEventListener("scroll",revealOnScroll);


revealOnScroll();
