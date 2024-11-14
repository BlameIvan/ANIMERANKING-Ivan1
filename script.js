console.log("Hello!");
const todaysDate = () => {
  let d = new Date();
  return "today's date is " + d;
}


const dateBlock = document.getElementById("dateBlock")
dateBlock.innerText = todaysDate();
const body = document.body;
const d= new Date()


if (d.getHours() > 20 || d.getHours() <8) {
  body.style["backgroundColor"] = "black";
  body.style["color"] = "white";
} 
else{
  body.style["backgroundColor"] = "white";
  body.style["color"] = "black";
}  

