// getting access to the buttons and the content to change
let saleButton = document.getElementById('saleButton');
let findUsButton = document.getElementById('findUsButton');
let otherButton = document.getElementById('otherButton');
let saleContent = document.getElementById('saleContent');
let mapContent = document.getElementById('map');
let otherContent = document.getElementById('otherContent');

// resets the buttons and the content displayed in the middle right of the screen
function reset() {
    // hiding the content
    saleContent.style.display = "none";
    mapContent.style.display = "none";
    otherContent.style.display = "none";

    //resetting the buttons
    saleButton.style.border = "none";
    findUsButton.style.border = "none";
    otherButton.style.border = "none";
}

// showing the car sales
function showSale() {
    reset();
    saleContent.style.display = "grid";
    saleButton.style.borderBottom = "5px solid black";
}

// showing the map
function showFindUs() {
    reset();
    mapContent.style.display = "grid";
    findUsButton.style.borderBottom = "5px solid black";
}

// shwoing miscellaneous content
function showOther() {
    reset();
    otherContent.style.display = "grid";
    otherButton.style.borderBottom = "5px solid black";
}

// buttons are located in the middle right of the screen
saleButton.addEventListener('click',showSale,false);
otherButton.addEventListener('click',showOther,false);
findUsButton.addEventListener('click',showFindUs,false);

reset();
showFindUs();
console.log('No errors');
