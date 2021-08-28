let elTitle = document.querySelector(".title");

let sum = 11000;
let eur = 13600;

let airTicket = 500;
let hotel = 250;
let travel = 120;

let amount = sum * (airTicket + hotel) + travel * eur;

let userName = prompt("Ismingizni kiriting");
let information = prompt(`${userName}! Bilet narxi - 500$; Mehmonxona narxi - 250$; Va boshqa kongil ochar joylar uchun 120$. Izoh qoldishing mumkin :)`);
let userMoney = Number(prompt(`${userName}! Qancha pulingiz bor ,`, -0));

if(amount <=  userMoney){    
    elTitle.textContent = `Oq yo'l  ${userName} :)`
}
else{
    elTitle.textContent = `Ozgina sabr qilib :( Koproq pul toping ${userName}`
}