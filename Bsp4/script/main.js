"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";
const baseUrlCards = "http://nowaunoweb.azurewebsites.net/Cards/"

// hier kommen ihre Skripte hin
//  document.getElementsByTagName("button")[0].addEventListener("click", function(){
//     const color = document.getElementById("color");
//     const number = document.getElementById("number");
//     alert(`Farbe: ${color.value}, Number: ${number.value}`);
// });

const responseMessage = { 
    "Player": "Player 1", 
    "Cards": [ 
        { "Color": "Red", "Text": "Three", "Value": 3, "Score": 3 }, 
        { "Color": "Red", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Red", "Text": "Nine", "Value": 9, "Score": 9 }, 
        { "Color": "Red", "Text": "Reverse", "Value": 12, "Score": 20 }, 
        { "Color": "Blue", "Text": "Two", "Value": 2, "Score": 2 }, 
        { "Color": "Blue", "Text": "Four", "Value": 4, "Score": 4 }, 
        { "Color": "Blue", "Text": "Five", "Value": 5, "Score": 5 }, 
        { "Color": "Blue", "Text": "Seven", "Value": 7, "Score": 7 }, 
        { "Color": "Blue", "Text": "Eight", "Value": 8, "Score": 8 } 
    ], 
    "Score": 63 };
//Bereich auskommentieeren stg + k und dann c -> einkommentiern (zeile wieder): stg + k + u;
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    //  const colorInput = document.getElementById("color");
    //  const numberInput = document.getElementById("number");
    //  const li = document.createElement("li");
    //  const img = document.createElement("img");
     
    const response = getCards();
    const ul = document.querySelector("#cards ul");
    response.Cards.map(function(el){
        const li = document.createElement("li");
        const img = document.createElement("img");
        //const card = makeCardFromInput(colorInput.value, numberInput.value);
        const card = `${el.Color.slice(0,1).toLowerCase()}${convertNumber(el.Value)}`;
        img.src = `${baseUrl}${card}.png`;
        li.appendChild(img);
        ul.appendChild(li);
    })
    
    
    // img.src = `${baseUrl}$colorInput.value.slice(0,1).toLowercase()}${Number(numberInput.value)}.png`;
    // li.appendChild(img);
    // document.querySelector("#cards ul").appendChild(li);
    //slice(0.1).towLowercase auch möglich
});
document.getElementsByTagName("button")[1].addEventListener("click", function(){
    const last = document.querySelector("#cards ul").lastChild;
    const ul = document.querySelector("#cards ul");
    ul.removeChild(last);
});
document.getElementsByTagName("button")[2].addEventListener("click", function(){
    const ul = document.querySelector("#cards ul");
    const color = document.getElementById("color");
    const number = document.getElementById("number");
    const deleteCard =`${color.value.slice(0,1).toLowerCase()}${Number(number.value)}` 
    if(deleteCard == ul.childNodes.value){
        ul.removeChild(deleteCard);
    }
    //ul.removeChild(last);
});
/*
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
*/
function convertNumber(cardValue){
    if(cardValue <10){
        return cardValue;
    }
    switch(cardValue){
        case 10: return "d2";
        case 11: return "s";
        case 12: return "r";
        case 13: return "wd4";
        case 14: return "w";
    }
}    
function getCards(){
    return responseMessage;    
}