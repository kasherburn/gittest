//create an if statement for traffic lights with three different outcomes

let trafficLight = "Red"
if (trafficLight == "Red"){
    console.log("Stop")
}
else if (trafficLight == "Amber"){
    console.log("Wait")
}
else {
    console.log("Go")
}

//create an if statement for classifying exam marks, students can fail, pass or achieve a distinction
let examMark = 120
    if (examMark > 100){
        console.log("distinction")
    }
    else if (examMark >= 80){
        console.log("pass")
    }
    else {
        console.log("fail")
    }
    
    let day = "Sunday"
    
    //if statement within a function

    function dayChecker(){
        if (day == "Monday"){
            console.log("Today is Monday")
            day = "Tuesday"
        }
        else if (day == "Tuesday"){
            console.log("Today is Tuesday")
            day = "Wednesday"
        }
        else if (day == "Wednesday"){
            console.log("Today is Wednesday")
            day = "Thursday"
        }
        else if (day == "Thursday"){
            console.log("Today is Thursday")   
            day = "Friday"
        }
        else if (day == "Friday"){
            console.log("Today is Friday")
            day = "Saturday"
        }
        else if (day == "Saturday"){
            console.log("Today is Saturday")
            day = "Sunday"
        }
        else {
            console.log("Today is Sunday")
            day = "Monday"
        }

    }
    dayChecker()
    dayChecker()
    dayChecker()
    dayChecker()
    dayChecker()
    dayChecker()
    dayChecker()

    //Switch Statement

    function dayCheckerSwitch(){
        switch (day){
          case "Monday": 
          console.log("Today is Monday")
          day = "Tuesday"
          break;
          case "Tuesday":
          console.log("Today is Tuesday")
          day = "Wednesday"
          break;
          case "Wednesday":
          console.log("Today is Wednesday")
          day = "Thursday"
          break;
          case "Thursday":
          console.log("Today is Thursday")
          day = "Friday"
          break;
          case "Friday":
          console.log("Today is Friday")
          day = "Saturday"
          break;
          case "Saturday":
          console.log("Today is Saturday")
          day = "Sunday"
          break;
          case "Sunday":
          console.log("Today is Sunday")
          day = "Monday"
        }
    }
    dayCheckerSwitch()
    dayCheckerSwitch()
    dayCheckerSwitch()
    dayCheckerSwitch()
    dayCheckerSwitch()
    dayCheckerSwitch()
    dayCheckerSwitch()
    
    let examScore = 80;

    function didYouPassYourExam(){
        switch (examScore){
            case examScore >= 80:
            console.log("You have received an A")
            break;
            case examScore >= 60:
            console.log("You have received a B")
            break;
            case examScore >= 40:
            console.log("You have received a C")
            case examScore < 40:
            console.log("You have failed")
            break;

            default:
            console.log('Help.')
            break;

        }

    }    
    didYouPassYourExam()    

    let itemInMyBag = "Pen"

    function myBag(){
        switch (itemInMyBag){
            case "Purse":
            case "Sunglasses":
            case "Lip Balm":
            console.log("Please pass me that I need it")
            break;
            case "Keys":
            case "Pen":
            console.log("That's not what I'm looking for please put it back")
            break;

            default:
            console.log("That's not my stuff!")
            break;
        }
    }
    myBag()
    