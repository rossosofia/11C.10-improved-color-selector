"use strict"
// start
window.addEventListener("DOMContentLoaded" , start);

function start(){
    console.log("hello!");
    showAll();  // to show the default colour
    getColorInput();
  }

// -------------- GET ---------------
// getColorInput(){}
function getColorInput(){
    document.querySelector("input").addEventListener("input" , showAll);
  }

// showAll(){}
function showAll(){
    let rgb = hexToRGB(input.value);
    let hsl = RGBtoHSL(rgb);
    showHEXvalues(input.value);
    showBoxColor(input.value);
    showHSLvalues(hsl);
    showRGBvalues(rgb);
}


// -------------- SHOW ---------------
// function showRGBvalues(rgb){}
function showRGBvalues(rgb){
document.getElementById("rgb").textContent = `RGB  | ${rgb.r} - ${rgb.g} - ${rgb.b}`;}

// function showHSLvalues(hsl){}
function showHSLvalues(hsl){
document.getElementById("hsl").textContent = `HSL | ${hsl.h}% - ${hsl.s}% - ${hsl.l}%`;}

// function showHEXvalues(hex){}
function showHEXvalues(hex){
document.getElementById("hex").textContent = hex;}

// function showBoxColor(hex){}
function showBoxColor(input){
    let css = input;
    document.querySelector("div").style.backgroundColor = css;
}



// -------------- CONVERT ---------------
// this return HEX
function hexToRGB(hex){
    const r = parseInt(hex.substring(1,3),16);
    const g = parseInt(hex.substring(3,5),16);
    const b = parseInt(hex.substring(5,7),16);
    return {r,g,b};
}

// this return RGB
// function RGBtoHSL(rgb){}
function RGBtoHSL(rgb){
    let r = rgb.r;
    let g = rgb.g;
    let b = rgb.b;

    r /= 255;
    g /= 255;
    b /= 255;

let h, s, l;

const min = Math.min(r,g,b);
const max = Math.max(r,g,b);

if( max === min ) {
  h = 0;
} else
if (max === r) {
  h = 60 * (0 + (g - b) / (max - min) );
} else
if (max === g) {
  h = 60 * (2 + (b - r) / (max - min) );
} else
if (max === b) {
  h = 60 * (4 + (r - g) / (max - min) );
}
if (h < 0) {h = h + 360; }

l = (min + max) / 2;

if (max === 0 || min === 1 ) {
  s = 0;
} else {
  s = (max - l) / ( Math.min(l,1-l));
}

s *= 100;
l *= 100;
return {h: Math.floor(h) ,s: Math.floor(s),l: Math.floor(l)}
}





