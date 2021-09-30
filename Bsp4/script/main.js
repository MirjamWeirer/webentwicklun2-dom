"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin
//  document.getElementsByTagName("button")[0].addEventListener("click", function(){
//     const color = document.getElementById("color");
//     const number = document.getElementById("number");
//     alert(`Farbe: ${color.value}, Number: ${number.value}`);
// });
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    const colorInput = document.getElementById("color");
    const numberInput = document.getElementById("number");

    const li = document.createElement("li");
    const img = document.createElement("img");
    const card = makeCardFromInput(colorInput.value, numberInput.value);
    img.src = `${baseUrl}${card}.png`;
    li.appendChild(img);

    document.querySelector("#cards ul").appendChild(li);
});

function makeCardFromInput(color, number){
    let result;
    switch (color){
        case "Red":
        case "red":
        case "Rot":
        case "rot":
        case "r":
            result = "r";
            break;
        
        case "Green":
        case "green":
        case "Grün":
        case "grün":
        case "g":
            result = "g";
            break;

        case "Blue":
        case "blue":
        case "Blau":
        case "blau":
        case "b":
            result = "b";
            break;
        
        case "Yellow":
        case "yellow":
        case "Gelb":
        case "gelb":
        case "y":
            result = "y";
            break;

        }
    return result + number;
}