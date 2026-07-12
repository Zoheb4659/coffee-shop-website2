/*==================================================
            PRELOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.7s";

    }

});


/*==================================================
            MOBILE MENU
==================================================*/

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if(navLinks.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        }else{

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}


/*==================================================
            CLOSE MENU WHEN LINK IS CLICKED
==================================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        if(menuBtn){

            menuBtn.innerHTML='<i class="fas fa-bars"></i>';

        }

    });

});


/*==================================================
            STICKY HEADER EFFECT
==================================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(44,24,16,.96)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.background="rgba(44,24,16,.85)";
        header.style.boxShadow="none";

    }

});


/*==================================================
            BACK TO TOP BUTTON
==================================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================================
            ACTIVE NAV LINK
==================================================*/

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

const revealElements=document.querySelectorAll(

".feature-card,.card,.about,.gallery img,.review,.contact-form,.newsletter"

);

function reveal(){

    const windowHeight=window.innerHeight;

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<windowHeight-120){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition="all .7s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/*==================================================
            BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-this.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});


/*==================================================
            NEWSLETTER FORM
==================================================*/

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input").value.trim();

if(email===""){

alert("Please enter your email.");

return;

}

alert("🎉 Thank you for subscribing!");

newsletter.reset();

});

}


/*==================================================
            CONTACT FORM
==================================================*/

const contact=document.querySelector(".contact-form");

if(contact){

contact.addEventListener("submit",(e)=>{

e.preventDefault();

const name=contact.querySelector("input[type=text]").value.trim();

const email=contact.querySelector("input[type=email]").value.trim();

const message=contact.querySelector("textarea").value.trim();

if(name===""||email===""||message===""){

alert("Please fill all fields.");

return;

}

alert("✅ Message sent successfully!");

contact.reset();

});

}


/*==================================================
            IMAGE HOVER EFFECT
==================================================*/

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08) rotate(2deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*==================================================
            HERO IMAGE FLOAT
==================================================*/

const heroImage=document.querySelector(".hero-right img");

if(heroImage){

let angle=0;

setInterval(()=>{

angle+=0.02;

heroImage.style.transform=`translateY(${Math.sin(angle)*12}px)`;

},30);

}


/*==================================================
            SEARCH ICON
==================================================*/

const search=document.querySelector(".fa-search");

if(search){

search.addEventListener("click",()=>{

const keyword=prompt("Search Coffee Menu");

if(keyword){

alert("Searching for: "+keyword);

}

});

}


/*==================================================
            ORDER BUTTON
==================================================*/

const orderBtn=document.querySelector(".order-btn");

if(orderBtn){

orderBtn.addEventListener("click",()=>{

document.querySelector("#menu").scrollIntoView({

behavior:"smooth"

});

});

}

console.log("☕ Bean Haven Coffee Loaded Successfully!");