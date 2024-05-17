console.log("Guess a number between 1 to 8");
let a: number = Math.floor(Math.random() * 7) + 1; // Added +1 to make the range from 1 to 8
import inquirer from "inquirer";

(async () => { // Added async function wrapper
    while (true) {
        let input = await inquirer.prompt(
            {
                name: "guess",
                type: "number",
                message: "Enter your guess number you want between 1 to 8:"
            }
        );

        let ans: number = input.guess; // Added type definition for ans

        if (a === ans) {
            console.log("congratulation your number is absolutely correct");
            break;
        } else {
            console.log("sorry your guess number is wrong try again");
        }
    }
})(); // Added immediate invocation of the async function