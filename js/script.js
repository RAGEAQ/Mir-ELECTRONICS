/* ==========================================
   MIR Electronics JavaScript
========================================== */

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   Scroll To Top Button
========================================== */

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ==========================================
   Product Search
========================================== */


const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let filter = searchBox.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(function(card){

            let text = card.innerText.toLowerCase();

            if(text.includes(filter)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}


/* ==========================================
   Contact Form
========================================== */



/* ==========================================
   Active Navigation
========================================== */

const current=window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

const href=link.getAttribute("href");

if(href===current){

link.classList.add("active");

}

});

/* ==========================================
   Fade Animation
========================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.product-card,.about-box,.features div").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(30px)";

item.style.transition="all .6s ease";

observer.observe(item);

});

/* ==========================================
   Console Message
========================================== */

console.log("MIR Electronics Website Loaded Successfully");
/* ==========================================
   Mobile Menu
========================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}
