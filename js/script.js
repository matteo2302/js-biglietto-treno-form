console.log("JS OK");
//step 0
const yourTicketPlaceholder = document.getElementById("your-ticket");
const yourAgePlaceholder = document.getElementById("your-age");
const yourDistancePlaceholder = document.getElementById("your-distance");
const realPricePlaceholder = document.getElementById("real-price");
const send = document.getElementById("send");
const yourName = document.getElementById("your-name");
const yourKms = document.getElementById("kms");
const tren = document.getElementById("trenitalia");

// console.log(distance);
//const button = document.querySelector("button");
console.log(yourKms);
send.addEventListener("click", function () {
  let ticket = yourKms.value * 0.21;
  console.log(ticket);
  let price = ticket;
  tren.className("show");
});

//steps from 1 to 4
// if (age < 18) {
//   price = ticket - (ticket / 100) * 20;
// }
// if (age > 65) {
//   price = ticket - (ticket / 100) * 40;
// }
//console.log("il tuo biglietto costa", price.toFixed(2), "euro");
//bonus
yourTicketPlaceholder.innerText = price.toFixed(2);

// yourDistancePlaceholder.innerText = distance;
// realPricePlaceholder.innerText = ticket.toFixed(2);
