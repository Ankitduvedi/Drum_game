for(var i = 0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function clicked() {
       var buttonInnerHTML = this.innerHTML;
       check(buttonInnerHTML);
       animation(buttonInnerHTML);
      
  
    });
}
document.addEventListener("keypress", function (ankit){
    check(ankit.key);
    animation(ankit.key);
});

function check(key){
    switch (key)
    {
     case "w":
         var tom1 = new Audio("sounds/0.mp3");
         tom1.play();
         break;
    
     case "a":
         var tom1 = new Audio("sounds/1.mp3");
         tom1.play();
         break;
     case "s":
         var tom1 = new Audio("sounds/2.mp3");
         tom1.play();
         break;
    
     case "d":
         var tom1 = new Audio("sounds/3.mp3");
         tom1.play();
         break;

     case "j":
         var tom1 = new Audio("sounds/4.mp3");
         tom1.play();
         break;

     case "k":
         var tom1 = new Audio("sounds/5.mp3");
         tom1.play();
         break;

     case "l":
         var tom1 = new Audio("sounds/6.mp3");
         tom1.play();
         break;
     }
}
function animation(currentkey){
    var keypressed = document.querySelector("."+ currentkey);
    keypressed.classList.add("pressed");
    var keypressed1 = document.querySelector(".bg1");
    keypressed1.classList.add("bg");
    setTimeout(function(){
        keypressed.classList.remove("pressed");
        keypressed1.classList.remove("bg");
    }, 100);

}