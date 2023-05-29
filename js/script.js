console.log("JS OK");
//step 0
const yourTicketPlaceholder = document.getElementById("your-ticket");
const yourDistancePlaceholder = document.getElementById("your-distance");
const realPricePlaceholder = document.getElementById("real-price");
//today
const send = document.getElementById("send");
const yourName = document.getElementById("your-name");
const yourKms = document.getElementById("kms");
const tren = document.getElementById("trenitalia");
const yourAge = document.getElementById("age");
const greetings = document.getElementById("greetings");
//
console.log(yourKms);
send.addEventListener("click", function () {
  let ticket = yourKms.value * 0.21;
  console.log(ticket);
  let price = ticket;

  tren.classList.remove("hidden");
  tren.classList.add("show");
  yourDistancePlaceholder.innerText = yourKms.value;
  if (yourAge.value === "minorenne") {
    price = ticket - (ticket / 100) * 20;
  }
  if (yourAge.value === "over65") {
    price = ticket - (ticket / 100) * 40;
  }
  yourTicketPlaceholder.innerText = price.toFixed(2);
  realPricePlaceholder.innerText = ticket.toFixed(2);
  greetings.innerText = yourName.value;
});

//steps from 1 to 4

//console.log("il tuo biglietto costa", price.toFixed(2), "euro");
//bonus
