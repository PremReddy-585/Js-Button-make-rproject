let bgcolor = document.getElementById("bgColorInput");
let fontcolor = document.getElementById("fontColorInput");
let fontsize = document.getElementById("fontSizeInput");
let fontweight = document.getElementById("fontWeightInput");
let paddingg = document.getElementById("paddingInput");
let borderradius = document.getElementById("borderRadiusInput");
let custombutton = document.getElementById("customButton");


function applyButtonElement() {
    let bgColor = bgcolor.value;
    let fontColor = fontcolor.value;
    let fontSize = fontsize.value;
    let fontWeight = fontweight.value;
    let padding = paddingg.value;
    let borderRadius = borderradius.value;

    custombutton.style.backgroundColor = bgColor;
    custombutton.style.color = fontColor;
    custombutton.style.fontSize = fontSize;
    custombutton.style.fontWeight = fontWeight;
    custombutton.style.padding = padding;
    custombutton.style.borderRadius = borderRadius;
}
