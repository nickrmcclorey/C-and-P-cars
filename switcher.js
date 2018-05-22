// getting access to the buttons and the content to change
let saleButton = document.getElementById('saleButton');
let findUsButton = document.getElementById('findUsButton');
let otherButton = document.getElementById('otherButton');
let saleContent = document.getElementById('saleContent');
let mapContent = document.getElementById('map');
let otherContent = document.getElementById('otherContent');

function reset() {
    saleContent.style.display = "none";
    mapContent.style.display = "none";
    otherContent.style.display = "none";

    saleButton.style.border = "none";
    findUsButton.style.border = "none";
    otherButton.style.border = "none";
}

function showSale() {
    reset();
    saleContent.style.display = "grid";
    saleButton.style.borderBottom = "5px solid black";
}

function showFindUs() {
    reset();
    mapContent.style.display = "grid";
    findUsButton.style.borderBottom = "5px solid black";
}

function showOther() {
    reset();
    otherContent.style.display = "grid";
    otherButton.style.borderBottom = "5px solid black";
}

saleButton.addEventListener('click',showSale,false);
otherButton.addEventListener('click',showOther,false);
findUsButton.addEventListener('click',showFindUs,false);

reset();
showSale();
console.log('No errors');
