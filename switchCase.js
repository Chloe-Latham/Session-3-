function checkValue(){
   var text;
   var lang; = document.getElementById("inputValue").value;

   switch(lang) {
     case "JavaScript":
       text = "Yay!";
       break;
     case "HTML":
       text = "Ok";
       break;
     case "CSS":
       text = "Right";
       break;

      // add case here

      default:
       text = "You need to enter something!";
   }
   document.getElementById("displayText").innerHTML = text;
}
