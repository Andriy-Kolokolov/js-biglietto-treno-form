const kilometrePrice = 0.21;
const juniorAge = 17;
const seniorAge = 65;
const discountJunior = 0.20; // 20%
const discountSenior = 0.40; // 40%




// const btnGetPrice = document.getElementById("btn-calculate-price");
// const fieldPrice = document.getElementById("price-field");
//
// btnGetPrice.addEventListener("click", function (event){
//     event.preventDefault();
//     const inputDistance = parseInt(document.getElementById("input-travel-distance").value);
//     const inputAge = parseInt(document.getElementById("input-age").value);
//     fieldPrice.innerText = getTravelPrice(inputAge, inputDistance).toFixed(2) + " €";
// })
//
// function getTravelPrice(age, distance) {
//
//     const defaultPrice = distance * kilometrePrice;
//
//     if (age <= juniorAge) {
//         return defaultPrice - defaultPrice * discountJunior;
//     } else if (age > juniorAge && age < seniorAge) {
//         return defaultPrice;
//     } else if (age >= seniorAge) {
//         return defaultPrice - defaultPrice * discountSenior;
//     }
// }