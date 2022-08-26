let ticketChoices = document.getElementById("tickets-opt");
let duration = document.getElementById("duration");
let foodToken = document.getElementById("food");
let btnAddOrder = document.getElementById("add");
let btnPlaceOrder = document.getElementById("place");
let outOvrOrder = document.getElementById("Overall-order");
let outOvrOrderCost = document.getElementById("Overall-order-cost");
let ticketForm = document.getElementById("ticket_form");
let noOfTickets = document.getElementById("num");
let outCurrentCost = document.getElementById("current-order-cost");
let outTable = document.getElementById("total-item");
let removeTable = document.getElementById("remove");
let popUp = document.getElementById("popup-ticket");
let okbtn = document.getElementById("okbtn");
let btnAddFav = document.getElementById("add-fav");
let btnOrderFav = document.getElementById("order-fav");
let btnLoyalty = document.getElementById("loyalty");




let notickets = 1;
let durationPrice = 0;
let ticketPrice;
let extraAmount = 0;6
let totalPrice = 0;
let total;
let ovrCost = 0;
let count = 1;
let currentOrd = 0;
let txtDuration;
let noFoodToken;
let txtTicketType;
let y;
let durationIndex;
let x;
let txtDurationType;
let allNoTickets = 0;
let loyaltyPoints = 0;


//when the page loads this function will execute

window.addEventListener("load" , function(){
    duration.disabled = true
    foodToken.disabled = true
    foodToken.checked = false

    outOvrOrderCost.innerHTML = `${ovrCost} LKR`
    outCurrentCost.innerHTML = `${totalPrice} LKR`

    if (localStorage.getItem('points') > 0){
        allNoTickets = parseInt(localStorage.getItem("noOftickets"))
    }
        else {
            allNoTickets = 0;
        }
    }
)

//When user choose a ticket option, this function will execute

ticketChoices.addEventListener("change", function(){
    ticketPrice = ticketChoices.value;   

    if (ticketPrice == 15000 || ticketChoices.value == 4500 ){
        duration.disabled = true
        foodToken.disabled = true
        extraAmount = 0;
        duration.options.selectedIndex = 1;
    }
    else {
        duration.disabled = false
        foodToken.disabled = false
    }
    
    if(ticketChoices.value == 5000){
        ticketPrice = 5000;
        duration.options.selectedIndex = 1;
        noOfTickets.value = 1;
        
    }
    else if (ticketChoices.value == 2500){
        ticketPrice = 2500;
        duration.options.selectedIndex = 1;
        noOfTickets.value = 1;

    }
    else if (ticketChoices.value == 1000){
        ticketPrice = 1000;
        duration.options.selectedIndex = 1;
        noOfTickets.value = 1;

    }
    else if (ticketChoices.value == 500){
        ticketPrice = 500;
        duration.options.selectedIndex = 1;
        noOfTickets.value = 1;

    }
    else if (ticketChoices.value == 15000){
        ticketPrice = 15000;
        duration.options.selectedIndex = 1;
        noOfTickets.value = 1;

    }
    else if (ticketChoices.value == 4500){
        ticketPrice = 4500;
        duration.options.selectedIndex = 1;
        noOfTickets.value = 1;

    }
    else {
        ticketPrice = null;
    }

    totalPrice = (ticketPrice + durationPrice) + extraAmount
    outCurrentCost.innerHTML = `${totalPrice} LKR`

})

//When user choose a duration, this function will execute

duration.addEventListener("change", function(){
    if (duration.value == "12h" && (ticketChoices.value == 1000 || ticketChoices.value == 500)){
        durationPrice = 250;
    }
    else if (duration.value == "12h" && (ticketChoices.value == 5000 || ticketChoices.value == 2500)){
        durationPrice = 500;
    }
    else if (duration.value == "1d" && (ticketChoices.value == 1000 || ticketChoices.value == 500)){
        durationPrice = 500;
    }
    else if (duration.value == "1d" && (ticketChoices.value == 5000 || ticketChoices.value == 2500)){
        durationPrice = 1000;
    }
    else if (duration.value == "2d" && (ticketChoices.value == 1000 || ticketChoices == 500)){
        durationPrice = 1000;
    }
    else if (duration.value == "2d" && (ticketChoices.value == 5000 || ticketChoices.value == 2500)){
        durationPrice = 2000;
    }

    else {
        durationPrice = 0;
    }

    totalPrice = (ticketPrice + durationPrice) * notickets + extraAmount
    outCurrentCost.innerHTML = `${totalPrice} LKR`  

})

//When user enter the number of tickets, this function will execute

noOfTickets.addEventListener("input", function(){

    notickets = parseInt(noOfTickets.value);
    totalPrice = (ticketPrice + durationPrice) * notickets + extraAmount
    outCurrentCost.innerHTML = `${totalPrice} LKR`
})

//When user enter the number of food tokens, this function will execute

foodToken.addEventListener("input", function(){
    noFoodToken = parseInt(foodToken.value);
    extraAmount = noFoodToken * 500
    totalPrice = (ticketPrice + durationPrice) * notickets + extraAmount
    outCurrentCost.innerHTML = `${totalPrice} LKR`
})

// When user click add to order button, this function will execute

ticketForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    btnPlaceOrder.style.display = "block"
   
    document.getElementById("blank").style.display = "none"

    let row = outTable.insertRow(count);
    count++;
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    let col4 = row.insertCell(3);
    let col5 = row.insertCell(4);
    let col6 = row.insertCell(5);

    let txtTicket = ticketChoices.options[ticketChoices.selectedIndex].text;
    let txtNoTickets = noOfTickets.value
    txtDuration = duration.options[duration.selectedIndex].text;

    currentOrd++;

    col1.innerHTML = `${currentOrd}`
    col2.innerHTML = `${txtTicket}`
    col3.innerHTML = `${txtNoTickets}`
    col4.innerHTML = `${txtDuration}`
    col5.innerHTML = `${extraAmount} LKR`
    col6.innerHTML = `${totalPrice} LKR`
    
    outOvrOrder.innerHTML = `${currentOrd}`
    
    ovrCost = totalPrice + ovrCost
    outOvrOrderCost.innerHTML = `${ovrCost} LKR`

    ticketChoices.options.selectedIndex = 1;
    duration.options.selectedIndex = 1;
    noOfTickets.value = 1;
    foodToken.value = 0;
    extraAmount = 0;
    totalPrice = 0;
    outCurrentCost.innerHTML = `${totalPrice} LKR`


    
    allNoTickets = notickets + allNoTickets
       
})

// When user click place order button, this function will execute

btnPlaceOrder.addEventListener("click", function(){

    ticketChoices.options.selectedIndex = 1;
    ovrCost = 0;
    outOvrOrderCost.innerHTML = `${ovrCost} LKR`
    totalPrice = 0;
    outCurrentCost.innerHTML = `${totalPrice} LKR`
    outOvrOrder.style.display = "none";
    btnAddFav.style.visibility = "hidden";
    btnOrderFav.style.visibility = "hidden";
    removeTable.innerHTML = "";
    btnAddOrder.style.display = "none";
    btnPlaceOrder.style.visibility = "hidden";
    btnLoyalty.style.visibility = "hidden";

});

// When the popup message shows, background will be dark

const openModelButton = document.querySelectorAll("[data-modal-target]")
let overlay = document.getElementById('overlay');

openModelButton.forEach(button => {
    button.addEventListener("click", () => {
        let modal = document.querySelector(button.dataset.modalTarget)
        openModel(modal)
    })
})

function openModel(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

okbtn.addEventListener("click", function(){
    location.reload();
})

// when user click add to favoutite button, this function will execute

btnAddFav.addEventListener("click", function(evt){
    evt.preventDefault();
    

    if (ticketChoices.value == ""){
        alert("Please choose a ticket before you add to favourite");
    }
    else{

    noFoodToken = parseInt(foodToken.value);
    
    durationIndex = duration.selectedIndex;
    
    //storing above data in local storage
    
    let favOrder = {localTicketPrice:ticketPrice, localNoOfTickets:notickets, localDuration:durationIndex, localFoodToken:noFoodToken, localTotalCost:totalPrice}
    localStorage.setItem('favorder', JSON.stringify(favOrder))
    
    ticketChoices.options.selectedIndex = 0;
    duration.options.selectedIndex = 1;
    noOfTickets.value = 1;
    foodToken.value = 0;
    outCurrentCost.innerHTML = `0 LKR`
    
    document.getElementById("h1").style.display = "none";
    document.getElementById("h2").style.display = "inline";
    }

    extraAmount = 0;
    totalPrice = 0;
    durationPrice = 0;
    notickets = 1;

})

// When user click order favourite button, this function will execute

btnOrderFav.addEventListener("click", function(event){
    event.preventDefault();
    let retriveFavorder = JSON.parse(localStorage.getItem('favorder'))
    ticketPrice = retriveFavorder.localTicketPrice
    notickets = retriveFavorder.localNoOfTickets
    durationIndex = retriveFavorder.localDuration
    noFoodToken = retriveFavorder.localFoodToken * 500
    totalPrice = retriveFavorder.localTotalCost
    
    allNoTickets = notickets + allNoTickets

    document.getElementById("blank").style.display = "none"

    let row = outTable.insertRow(count);
    count++;
    let col1 = row.insertCell(0);
    let col2 = row.insertCell(1);
    let col3 = row.insertCell(2);
    let col4 = row.insertCell(3);
    let col5 = row.insertCell(4);
    let col6 = row.insertCell(5);

    //display type of ticket

    if (ticketPrice == 5000){
        y = ticketChoices.options;
        txtTicketType = y[1].text;
    }
    else if (ticketPrice == 2500){
        y = ticketChoices.options;
        txtTicketType = y[2].text;      
    }
    else if (ticketPrice == 1000){
        y = ticketChoices.options;
        txtTicketType = y[3].text;
    }
    else if (ticketPrice == 500){
        y = ticketChoices.options;
        txtTicketType = y[4].text;
    }
    else if (ticketPrice == 4500){
        y = ticketChoices.options;
        txtTicketType = y[5].text;
    }
    else {
        y = ticketChoices.options;
        txtTicketType = y[6].text;
    }

    //display duration
        
    if (durationIndex == 1){
        x = duration.options;
        txtDurationType = x[1].text;
    }
    else if (durationIndex == 2){
        x = duration.options;
        txtDurationType = x[2].text;
    }
    else if (durationIndex == 3){
        x = duration.options;
        txtDurationType = x[3].text;
    }
    else {
        x = duration.options;
        txtDurationType = x[4].text;
    }
   
    currentOrd++;

    col1.innerHTML = `${currentOrd}`
    col2.innerHTML = `${txtTicketType}`
    col3.innerHTML = `${notickets}`
    col4.innerHTML = `${txtDurationType}`
    col5.innerHTML = `${noFoodToken} LKR`
    col6.innerHTML = `${totalPrice} LKR`
    
    outOvrOrder.innerHTML = `${currentOrd}`
    
    ovrCost = totalPrice + ovrCost
    outOvrOrderCost.innerHTML = `${ovrCost} LKR`

    ticketChoices.options.selectedIndex = 0;
    duration.options.selectedIndex = 1;
    noOfTickets.value = 1;
    foodToken.value = 0;
    extraAmount = 0;
    totalPrice = 0;
    durationPrice = 0;
    notickets = 1;
    outCurrentCost.innerHTML = `${totalPrice} LKR`

    document.getElementById("h1").style.display = "inline";
    document.getElementById("h2").style.display = "none";
    btnPlaceOrder.style.display = "block"
    localStorage.removeItem('favorder')

})

//When user click check loyalty button, this function will execute

btnLoyalty.addEventListener("click", function(evt){
    evt.preventDefault();
    if(allNoTickets > 3){
        loyaltyPoints = allNoTickets * 20;
        localStorage.setItem("noOftickets", allNoTickets);
        localStorage.setItem("points", loyaltyPoints);
        localStorage.getItem("noOftickets", allNoTickets);
        getLoyaltyPoints = localStorage.getItem('points', loyaltyPoints);
        alert(`You have earned ${getLoyaltyPoints} loyalty points`);
    }
    else{
        loyaltyPoints = 0;
        alert(`Sorry!! You haven't earned any loyalty points`);
    }

})


        
