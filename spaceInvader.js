"use strict";

//functie oproepen
drawSpaceInvader();

//Aanmaken functie het tekenen van een spaceinvader
function drawSpaceInvader(){
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    //Genereren van Vierkant 300x300
    context.beginPath(); 
    context.rect(50,50,300,300);
    //Vierkant inkleuren
    context.fillStyle ="black";
    context.stroke();
    context.fill();

    //genereren Spaceinvader
    context.beginPath();
    context.rect(125,275,50,50);
    context.rect(225,275,50,50);

    context.rect(75,75,50,50);
    context.rect(275,75,50,50);
    context.rect(275,125,50,50);
    context.rect(275,175,50,50);
    context.rect(225,175,50,50);
    context.rect(175,175,50,50);
    context.rect(125,175,50,50);
    context.rect(75,175,50,50);
    context.rect(75,125,50,50);
    context.rect(125,125,50,50);
    context.rect(175,125,50,50);
    context.rect(225,125,50,50);

    //Spaveinvader inkleuren
    context.fillStyle="#00ff00";
    context.stroke();
    context.fill();
}
