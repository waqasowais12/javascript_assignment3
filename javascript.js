let empty = [];
let std_name = ["Ali","Ahmed","Fahad"];
let number_array = [1, 2, 3, 4, 5];
let boolean_array = [true, false];
let mixedArray = [1, "Fahad", true, 3.14, false, "Ali"];
let Array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Programs List</h1>")

document.write("<ul>");
for (let i = 0; i < Array.length; i++) {
    document.write("<li>" + Array[i] + "</li>");
  }
  
  document.write("</ul>");
  
  let std_marks = [420, 480, 350];
  var totalMarks = 500;

  document.write("<h1>Student Percentages</h1>");
  document.write("<ul>");

  for (let i = 0; i < std_name.length; i++) {
    let pert = (std_marks[i] / totalMarks) * 100;
    
    document.write("<li>"+std_name[i]+ " Scored " + pert + " %</li>");
  }

  document.write("</ul>");

  let color = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"];

  document.write("<h1>Color Names:</h1>");
  
document.write("<p>")
  for(let i = 0; i < color.length; i++)
  {
      document.write(color[i]+", ");
  }

  document.write("</p>")

var inputcolor = prompt("Enter a color to add at the beginning of the array:");
  
color.unshift(inputcolor);
document.write("<h1>Updated Color Names:</h1>");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
document.write("</p>");
var inputcolor = prompt("Enter a color to add at the end of the array:");
color.push(inputcolor);
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");
  
color.unshift("Black","Brown");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");

color.shift();
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");


 color.pop();
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
 document.write("</p>");

 function function1(){
    let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
    let colorToAdd = prompt("Enter the color name you want to add:");
    color.splice(indexToAdd, 0, colorToAdd);
    document.write("<h1>Updated Color Names:</h1>");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
document.write("</p>");
 }
 function function2(){
    let indexToDelete = parseInt(prompt("Enter the index from where you want to delete colors:"));
  let ColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));

  color.splice(indexToDelete, ColorsToDelete);

    document.write("<h1>Updated Color Names:</h1>");
document.write("<p>")
for(let i = 0; i < color.length; i++)
{
    document.write(color[i]+", ");
}
document.write("</p>");
 }