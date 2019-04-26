let tipCalculator = {
billAmount : 0,
numberOfPeopleSplittingBill : 4
}

function billAmountFunction(bill){
    tipCalculator.billAmount = bill
    if (bill >= 40) {
        alert("Okay let's pay it!")
    }
    else if (bill < 40) {
        alert("Are you sure you don't want a dessert?")
    }
}

tipCalculator.billAmount = prompt("How much is the bill?")
billAmountFunction(tipCalculator.billAmount);

function howDidYouFindTheService(){
    prompt('How did you find the Service? \n 1. Very Good \n 2. Good \n 3. Poor')
}

howDidYouFindTheService()

let calculateTip = tipCalculator.billAmount / 100 * 15
let EachPersonsAmount = tipCalculator.billAmount / tipCalculator.numberOfPeopleSplittingBill
EachPersonsAmount += calculateTip

function howMuchDoesEachPersonOwe(){
    alert(`You each need to pay ${EachPersonsAmount}`)
}

function CalculateTipAmount(){
        alert(`And the tip is ${calculateTip}`)
    }

howMuchDoesEachPersonOwe()
CalculateTipAmount()
 


