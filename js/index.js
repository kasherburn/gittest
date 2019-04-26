//create a function which shows what time and days the shop is open
function shopOpeningTimes(Time, Day) {
	if ((Day === "Sunday") && (Time > 8 && Time < 18)) {
		return "shop is open"
	} 
	else {
		return "shop is closed"
	}
	else if ((Day === "Saturday") && (Time > 8 && Time < 18)) {
	
		return "shop is open"
	} 
	else {
		return "shop is closed"
	} 
	else if (Time > 6 && Time < 20) {
		return "shop is open"
	} 
	else {
		return "shop is closed"
	}
	}
	
	
	console.log(shopOpeningTimes(14, "Tuesday"));

	//make comment clear
	//make function name clearer
	//change d to day
	//indentation
	//clean up if statement

