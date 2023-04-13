const kilometrePrice = 0.21;
const discountJunior = 0.20; // 20%
const discountSenior = 0.40; // 40%

const btnGetPrice = document.getElementById("btn-calculate-price");
const btnClean = document.getElementById("btn-clean");
const fieldTicketOwnerName = document.getElementById("output-ticket-owner-name");
const fieldTicketPrice = document.getElementById("output-ticket-price");

btnGetPrice.addEventListener("click", function (event) {
    event.preventDefault();
    if (!inputIsEmpty()) {
        const inputName = document.getElementById("input-name").value;
        const inputDistance = parseInt(document.getElementById("input-travel-distance").value);
        const inputAge = document.getElementById("input-select-age").value;

        fieldTicketPrice.innerText = getTravelPrice(inputAge, inputDistance).toFixed(2) + " €";
        fieldTicketOwnerName.innerText = inputName;
    }
    else {
        alert("Fill all the fields to get ticket, or check if input values are correct")
    }
});

btnClean.addEventListener("click", function (event) {
    event.preventDefault();
    cleanInputOutput();
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

function cleanInputOutput() {
    document.getElementById("input-name").value = "";
    document.getElementById("input-travel-distance").value = "";
    document.getElementById("input-select-age").value = "Select..";
    document.getElementById("output-ticket-owner-name").innerText = "";
    document.getElementById("output-ticket-price").innerText = "";
}

function inputIsEmpty() {
    const name = document.getElementById("input-name").value;
    const dist = document.getElementById("input-travel-distance").value;
    const age = document.getElementById("input-select-age").value;

    return (name.length === 0 || dist.length === 0 || age === "Select..");
}