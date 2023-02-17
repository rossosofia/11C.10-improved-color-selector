"run strict"
window.addEventListener("DOMContentLoaded" , start);

function start(){
    console.log("hello!");
    showSelectedColor(input.value);
    getColorInput();
  }


function getColorInput(){
    document.querySelector("input").addEventListener("input" , getColor);}


function getColor(evt){
    showSelectedColor(evt.target.value);
}


function showSelectedColor(hexValue){
    document.querySelector("div").style.backgroundColor = hexValue;
    const HEXColor = hexValue;
    const RGBColor = hexToRGB(HEXColor);
    const HSLColor = RGBToHSL(RGBColor.r, RGBColor.g, RGBColor.b);
    showHEX(HEXColor);
    showRGB(RGBColor);
    showHSL(HSLColor);
}


// ------------- VIEW ------------------

function showHEX(color){
document.querySelector("#hex").textContent = `HEX ${color}`;
};

function showRGB(color){
    document.querySelector("#rgb").textContent = `RGB  | ${color.r} - ${color.g} - ${color.b}`;
}

function showHSL(color){
    document.querySelector("#hsl").textContent = `HSL | ${color.h} - ${color.s}% - ${color.l}%`;
}



// -------------- CONTROLLER ---------------


function hexToRGB(hex){
    const r = parseInt(hex.substring(1,3),16);
    const g = parseInt(hex.substring(3,5),16);
    const b = parseInt(hex.substring(5,7),16);
    return {r,g,b};
}

function RGBToHSL(r,g,b){
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

// return {h, s, l};
return {h: Math.floor(h) ,s: Math.floor(s),l: Math.floor(l)}
}