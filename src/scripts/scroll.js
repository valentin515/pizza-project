export function scrollDisable(){

    const body = document.body;

    const header = document.querySelector("header");

    header.style.cssText = `
    padding-right: ${window.innerWidth - document.documentElement.clientWidth}px
    `;
    
    body.style.cssText = `
    padding-right: ${window.innerWidth - document.documentElement.clientWidth}px
    `;

    body.dataset.position = window.scrollY;
    body.style.top = -window.scrollY + "px";
    body.classList.add("disable-scroll");
    
  }

 export function scrollEnable(){

    const body = document.body;

    const header = document.querySelector("header");


    setTimeout(() => {

       body.classList.remove("disable-scroll");
       body.style.top = "auto";
       body.style.cssText = ""; 
       header.style.cssText = "";  
       window.scroll({top: body.dataset.position, left: 0})

    }, 100)
    
  }
