//name in the parentheses is a parimeter
function hiName(name) {
    console.log("hi", name);
    var welcome = "Welcome to the Intercontinental Hotel.";
}
// call the function in order for it to run
hiName("Georgina");

function goodBye(name) {
    console.log("Bye", name)
    var farwell = "Thank you for visiting.";
}

goodBye("Georgina");

function hotelBill(dailyrate, totalDays){
    var sum = dailyrate * totalDays;
    console.log("Your total bill is:", sum)
}
// the numbers in the parenthese are called argument
hotelBill(450,3);


