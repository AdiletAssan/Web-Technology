const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

let time = document.getElementById("current-time")


setInterval(()=>{
  let d= new Date();
  time.innerHTML=d.toLocaleTimeString();
},1000) 

var icon= document.getElementById("icon");

icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="sun.png";
  }else{
    icon.src="moon.png"
  }
}