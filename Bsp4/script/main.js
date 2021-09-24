"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin
//  document.getElementsByName("button")[0].addEventListener("click", function(){
//     const color = document.getElementById("color");
//     const number = document.getElementById("number");
//     alert(`Farbe: ${color.value}, Number: ${number.value}`);
// });
let button = document.getElementsByClassName("button");
button[0].addEventListener("click",function(){
    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;
    let ul =  document.querySelector("#cards ul");
    let li = document.createElement("li");
    let img = document.createElement("img");
    ul.appendChild(li);
    if (color[0] == "r"){
        const card = color + number;
        img.src = `${baseUrl}${card}.png`;
        li.appendChild(img);
    }else if (color[0] == "g"){
        const card = color + number;
        img.src = `${baseUrl}${card}.png`;
        li.appendChild(img);
    }else if (color[0] == "b"){
        const card = color + number;
        img.src = `${baseUrl}${card}.png`;
        li.appendChild(img);
    }else if (color[0] == "y"){
        const card = color + number;
        img.src = `${baseUrl}${card}.png`;
        li.appendChild(img);
    }
});