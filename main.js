const randomNumber = 5;
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "numberGuessingGame",
        type: "number",
        message: "Guess any rendom number"
    }
]);
if (answers.numberGuessingGame === randomNumber) {
    console.log(chalk.blue.bold("Your selected number is true "));
}
else {
    console.log(chalk.red.bold.italic("You have guessed the wrong number !!"));
}
