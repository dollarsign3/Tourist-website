let dntBtn = document.getElementById("donate");
let showForm = document.getElementById("donate-form");
let hidForm = document.getElementById("donate");
let popUpCont = document.getElementById("popup");
let okBtn = document.getElementById("okbtn");
let footer = document.getElementById("footer");

let form = document.getElementById('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let address = document.getElementById('address');
let cardName = document.getElementById('cname');
let creditCardNumb = document.getElementById('ccnum');
let expmonth = document.getElementById('expmonth');
let expyear = document.getElementById('expyear');
let cvv = document.getElementById('cvv');

dntBtn.addEventListener("click", visFunct);

function visFunct(){
    showForm.style.display = "block";
}
hidForm.addEventListener("click" , hidFunct);
function hidFunct(){
    hidForm.style.display = "none";
}

showForm.addEventListener("submit", function(event){
         event.preventDefault();
         checkInputs();
         if (valid == true){

            popUpCont.style.display = "block"
            showForm.style.display = "none";
         }
})
function checkInputs(){
    let fnameval = fname.value.trim();
    let lnameval = lname.value.trim();
    let emailval = email.value.trim();
    let cardNameval = cardName.value.trim();
    let creditCardNumbval = creditCardNumb.value.trim();
    let expmonthval = expmonth.value.trim();
    let expyearval = expyear.value.trim();
    let cvvVal = cvv.value.trim();
    let addval = address.value.trim();

    if (fnameval == ""){
        setErrorFor(fname, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(fname);
        valid = true;
    }
    if (lnameval == ""){
        setErrorFor(lname, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(lname);
        valid = true;
    }
    if (emailval == ""){
        setErrorFor(email, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(email);
        valid = true;
    }
    if (cardNameval == ""){
        setErrorFor(cardName, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(cardName);
        valid = true;
    }
    if (creditCardNumbval == ""){
        setErrorFor(creditCardNumb, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(creditCardNumb);
        valid = true;
    }
    if (expmonthval == ""){
        setErrorFor(expmonth, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(expmonth);
        valid = true;
    }
    if (expyearval == ""){
        setErrorFor(expyear, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(expyear);
        valid = true;
    }
    if (cvvVal == ""){
        setErrorFor(cvv, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(cvv);
        valid = true;
    }
    if (addval == ""){
        setErrorFor(address, 'First name cannot be blank');
        valid = false;
    } else {
        setSuccessFor(address);
        valid = true;
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

okBtn.addEventListener("click", function(event){
    event.preventDefault();
    //popUpCont.style.visibility = "visible";
    showForm.style.display = "none";
    dntBtn.style.display = "block";    
})




okbtn.addEventListener("click", function(){
    location.reload();
})







