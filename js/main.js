// survol
    var nav_underline;
    var nav_link;        
    nav_underline=document.querySelectorAll("header nav a span");
    nav_link=document.querySelectorAll("header nav a");
    for (let i = 0; i < nav_link.length; i++) {
        nav_link[i].addEventListener("mouseover",(e)=>{
            nav_underline[i].style.width="100%";
            e.target.style.fontWeight="bolder"
        }); 
        nav_link[i].addEventListener("mouseout",(e)=>{
            if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
            e.target.style.fontWeight=""
        });
    }

// message
    
    document.querySelector(".sms").onclick=()=>{
        document.querySelector(".sms").style.display="none";
        document.querySelector("form").style.display="block";
        }
    document.querySelector("#submit").onclick=(e)=>{
        e.preventDefault();
        document.querySelector(".sms").style.display="flex";
        document.querySelector("form").style.display="none";
     }
    
// fade in
    var text;
    var titres;
    var description;
    var fleche;
    text=["BATMAN AU CINÉMA","NÉMÉSIS","MULTIMÉDIA"];
    titres=document.querySelectorAll(".titre");   
    description=document.querySelector(".description");
    fleche=document.querySelector(".image-scroll-btn div  img");
    function fadeIn() {
        description.style.transform="translateX(0)";
        fleche.style.transform="translate(0)";
        for (let i = 0; i < imgZoom.length; i++) {
            imgZoom[i].style.transform="scale(1)";
        }
        for (let i = 0; i < titres.length; i++) {
            titres[i].style.transform="translate(0)";
            titres[i].style.opacity="1";
            titres[i].textContent=text[i];
        }
        blockInFade.style.transform="translateX(10px)";
    }
    window.onload=fadeIn;


    //logo
    var logo;
    logo = document.querySelector(".logo");
    window.addEventListener("scroll",()=>{
    const {scrollTop} = document.documentElement;
    if(scrollTop<=5400 && scrollTop>100)
    logo.style.top=scrollTop+"px";
    console.log(scrollTop)
    });

    // animation1
    var sousTitres;
    sousTitres=document.querySelectorAll(".sousTitres");

    // animation2
    var verticale1;
    verticale1=document.querySelector(".verticale1");

    // animation3
    var herosBtn;
    var adveBtn;
    herosBtn=document.querySelector("heroBtn");
    adveBtn=document.querySelector("adveBtn");

    if(herosBtn!=null && hero!=undefined){

    }
    if(herosBtn!=null && hero!=undefined){
            
    }

    // animation4
    var blockInFade;
    var imgZoom;
    var descriPersonnage;
    blockInFade=document.querySelector(".blockInFade");
    imgZoom=document.querySelectorAll(".imgZoom");
    descriPersonnage=document.querySelectorAll(".personnage-description");
    blockInFade.style.transition="1s"
    for (let i = 0; i < imgZoom.length; i++) {
        imgZoom[i].addEventListener("mouseover",function(){
            descriPersonnage[i].style.bottom="-10px"
            descriPersonnage[i].style.overflow="visible"
        });
        imgZoom[i].addEventListener("mouseout",function(){
            descriPersonnage[i].style.bottom="";
            descriPersonnage[i].style.overflow="hidden "
        });
    }

    // animation5
    var point;
    var citations;
    var counter2;
    point=document.querySelectorAll(".cercle span");
    citations=document.querySelectorAll(".citations");
    counter2=0;
    setInterval(function () {
        document.querySelector(".cercle").classList.remove("cercle");
        point[counter2].classList.add("cercle");
        document.querySelector(".citations-active").classList.remove("citations-active");
        citations[counter2].classList.add("citations-active");
        counter2++;
        if(counter2==point.length){counter2=0;
        }
    },4500);

    // animation6
    var slider_content;
    var counter;
    slider_content=document.querySelectorAll(".slide-content");
    counter=0;
    setInterval(function () {
        for (let i = 0; i < slider_content.length; i++) {
            slider_content[i].style.transform="translateX(-200%)";
        }
        slider_content[counter].style.display="flex";
        slider_content[counter].style.transform="translateX(0%)" 
        counter++;
        if(counter==3){counter=0;}
    },5500);