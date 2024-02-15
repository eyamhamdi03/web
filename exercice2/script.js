function WriteText() {
const textarea = document.getElementById("text1");
const textDisplay = document.getElementById("textecrit");
textarea.addEventListener("input", function() {
textDisplay.textContent = textarea.value;
});}
function changeColor() {    
    const color = document.getElementById("color");
    const textDisplay = document.getElementById("textecrit");
    color.addEventListener("input", function() {
    textDisplay.style.color = color.value;
    });
}
function changeSize() {
    const size = document.getElementById("size");
    const textDisplay = document.getElementById("textecrit");
    size.addEventListener("input", function() {
    textDisplay.style.fontSize = size.value + "px";
    });
}   
function changeFont() {
    const font = document.getElementsByName("font")[0];
    const textDisplay = document.getElementById("textecrit");
    font.addEventListener("change", function() {
        textDisplay.style.fontFamily = font.value;
    });
}


WriteText();
changeColor();  
changeSize();
changeFont();
