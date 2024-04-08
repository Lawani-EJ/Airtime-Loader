const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myText2 = document.getElementById("myText2");
const mySubmit2 = document.getElementById("mySubmit2");
const resultElement = document.getElementById("resultElement");
let option;
let amount;

mySubmit.onclick = function () {

    option = myText.value;
    if (option == 1) {
        alert("WELCOME TO MTN SECTION");
        alert("ENTER YOUR AMOUNT IN THE WEBPAGE");
    } else if (option == 2) {
        alert("WELCOME TO GLO SECTION");
        alert("ENTER YOUR AMOUNT IN THE WEBPAGE");
    } else if (option == 3) {
        alert("WELCOME TO AIRTEL SECTION");
        alert("ENTER YOUR AMOUNT IN THE WEBPAGE");
    } else if (option == 4) {
        alert("WELCOME TO ETISALAT SECTION");
        alert("ENTER YOUR AMOUNT IN THE WEBPAGE");
    } else {
        alert("Wrong option try again!");
    }
}

mySubmit2.onclick = function () {
    amount = myText2.value;

    if (amount > 0) {
        resultElement.textContent = `${amount} has been credited to your account!`
        alert ("Account successfully Credited");
    } else if (amount < 0) {
        resultElement.textContent = `Price range Low`
        alert("Insufficient funds");
    } else {
        alert("Invalid Amount please try again");
    }
}


