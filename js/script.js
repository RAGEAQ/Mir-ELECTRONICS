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

const searchBox=document.getElementById("searchBox");

if(searchBox){

const cards=document.querySelectorAll(".product-card");

searchBox.addEventListener("keyup",()=>{

const value=searchBox.value.toLowerCase();

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.indexOf(value)>-1){

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

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

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
