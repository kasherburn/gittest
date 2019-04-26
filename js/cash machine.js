//create a prompt for user to enter their pin then display alert if pin is correct or not

let pinNumber = 1234
let checkBalance = 100


function checkPinNumber(inputtedNumber) {
 if (inputtedNumber == 1234){
    alert("your pin is correct")
    ifYourPinIsCorrect() 
}
 else {
     alert("that pin is incorrect")
 }
}
let inputtedNumber = prompt("please enter your pin")
checkPinNumber(inputtedNumber)


function ifYourPinIsCorrect(){
    prompt("Do you want to? \n 1. Check Balance \n 2. Withdraw cash with receipt \n 3. Withdraw cash without receipt \n 4. Change PIN")
    switch () {
        case "1":
        checkBalanceFunction()
        break;
        case "2":
        withdrawCashWithReceiptFunction()
        break;
        case "3":
        withdrawCashWithoutReceiptFunction()
        break;
        case "4":
        changePinFunction()
        break;
    }

}

function checkBalanceFunction() {
    alert("Your balance is: " + checkBalance);
    anotherServiceFunction();
}
//if yes go back to original screen if not bring up prompt saying bye
function anotherServiceFunction() {
    prompt("Would you like to use another service?")
    ifYourPinIsCorrect()
}

//ask how much cash they would like to withdraw with options, when they select these options check if they have reached the maximum amount
function withdrawCashWithReceiptFunction(){
    prompt("How much cash would you like to withdraw?")
}
//ask how much cash they would like to withdraw with options, when they select these options check if they have reached the maximum amount
function withdrawCashWithoutReceiptFunction(){
    prompt("How much cash would you like to withdraw?")
}
//ask what they would like to change their pin to and change the variable to this new value
function changePinFunction(){

}