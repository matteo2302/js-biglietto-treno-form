console.log("JS OK");
//step 0
const yourTicketPlaceholder = document.getElementById("your-ticket");
const yourDistancePlaceholder = document.getElementById("your-distance");
const realPricePlaceholder = document.getElementById("real-price");
//today
//step0
const send = document.getElementById("send");
const yourName = document.getElementById("your-name");
const yourKms = document.getElementById("kms");
const tren = document.getElementById("trenitalia");
const yourAge = document.getElementById("age");
const greetings = document.getElementById("greetings");
const yourDiscount = document.getElementById("discount");
const disocuntBox = document.getElementById("disocunt-box");
//button listener
send.addEventListener("click", function () {
  //ticket calc
  let ticket = yourKms.value * 0.21;
  console.log(ticket);
  let price = ticket;
  //tren to show
  tren.classList.remove("hidden");
  tren.classList.add("show");
  yourDistancePlaceholder.innerText = yourKms.value;
  greetings.innerText = yourName.value;
  //ticket calc if
  if (yourAge.value === "minorenne") {
    price = ticket - (ticket / 100) * 20;
  }
  if (yourAge.value === "over65") {
    price = ticket - (ticket / 100) * 40;
  }
  yourTicketPlaceholder.innerText = price.toFixed(2);
  realPricePlaceholder.innerText = ticket.toFixed(2);
  //discount?
  if (yourAge.value === "minorenne") {
    disocuntBox.classList.remove("hidden");
    disocuntBox.classList.add("show");
    yourDiscount.innerText = (ticket / 100) * 20;
  }
  if (yourAge.value === "over65") {
    disocuntBox.classList.remove("hidden");
    disocuntBox.classList.add("show");
    yourDiscount.innerText = (ticket / 100) * 40;
  }
});
