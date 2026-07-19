/* ==========================
   Scroll Animation
========================== */


const sections = document.querySelectorAll(
    "section"
);



window.addEventListener("scroll", () => {


    sections.forEach(section => {


        const sectionTop = section.offsetTop;

        const windowHeight = window.innerHeight;


        if(window.scrollY > sectionTop - windowHeight + 100) {


            section.classList.add("show");


        }


    });


});
/* ==========================
   WhatsApp Order Message
========================== */


const whatsappButtons = document.querySelectorAll(
    ".whatsapp-btn, .whatsapp-order"
);



whatsappButtons.forEach(button => {


    button.addEventListener("click", () => {


        const message = 
        "مرحباً Wesso Cokes 🍰%0Aأريد طلب تورتة أو حلويات وأحتاج معرفة التفاصيل.";



        const whatsappURL = 
        "https://wa.me/201097990107?text=" + message;



        button.href = whatsappURL;


    });


});
