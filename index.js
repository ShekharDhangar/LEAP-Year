var rs = require("readline-sync");
var chalk = require("chalk");
console.log("Welcome!")
var username = rs.question(chalk.bgYellow("What is your name? "));
console.log("Hi! "+chalk.yellow(username) +", Lets see were you born in a leap year or not.");
console.log( )
var birthYear = rs.question(chalk.bgMagenta("Enter your Birth Year in" + chalk.red(" YYYY ")+ "Format: "));

if(isNaN(birthYear)){
  console.log(chalk.bgRedBright("Invalid year! Please enter a valid year."))
}else if(birthYear%4 == 0 && birthYear%100 != 0 || birthYear%400 == 0){
  console.log(chalk.blueBright("\nYay! " + chalk.bgRed(username) + ", you were born in a leap year."))
}else{
  console.log(chalk.bgCyan("\nOoops! You were not born in a leap year."))
}
