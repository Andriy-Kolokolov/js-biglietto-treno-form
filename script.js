const kilometrePrice = 0.21;
const discountJunior = 0.20; // 20%
const discountSenior = 0.40; // 40%

const btnGetPrice = document.getElementById("btn-calculate-price");
const btnCancel = document.getElementById("btn-cancel");
const fieldTicketOwnerName = document.getElementById("output-ticket-owner-name");
const fieldTicketPrice = document.getElementById("output-ticket-price");

btnGetPrice.addEventListener("click", function (event) {
    event.preventDefault();
    const inputName = document.getElementById("input-name").value;
    const inputDistance = parseInt(document.getElementById("input-travel-distance").value);
    const inputAge = document.getElementById("input-select-age").value;

    fieldTicketPrice.innerText = getTravelPrice(inputAge, inputDistance) + " €";
    fieldTicketOwnerName.innerText = inputName;
});

btnCancel.addEventListener("click", function (event) {
    //todo
});

function getTravelPrice(age, distance) {

    const defaultPrice = distance * kilometrePrice;

    if (age === "junior") {
        return defaultPrice - defaultPrice * discountJunior;
    } else if (age === "adult") {
        return defaultPrice;
    } else if (age === "senior") {
        return defaultPrice - defaultPrice * discountSenior;
    }
}