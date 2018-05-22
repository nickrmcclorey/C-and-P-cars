
let saleButton = document.getElementById('saleButton');
let saleContent = document.getElementById('saleContent');
let mapContent = document.getElementById('map');
//let otherContent = document.getElementById('other');

function reset() {
    saleContent.style.display = "none";
    mapContent.style.display = "none";

}

function listCars() {
    reset();
    saleContent.style.display = "grid";
}
saleButton.addEventListener('click',listCars,false);



saleButton.textContent = "working";
