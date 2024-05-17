import inquirer from "inquirer";

let myBlance = 10000;


let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }
    ]
);

if (pinAnswer.pin == myPin) {
    console.log("correct pin");
   

   let operationAns = await inquirer.prompt(
        [
            {
                name:"operation"
                message:"please select option",
                type:"list",
                choices:["withdraw","check balance"]
            }
        ]
    );
    console.log(operationAns)
    if (operationAns.operation === " withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter amount",
                    type: "number"
                }
            ]
        );
        myBlance -= amountAns.amount
        console.log("your remaining balance is: " + myBlance)
    }else if (operationAns.operation === " check balance "){
        console.log("your remaining balance is: " + myBlance)
    }
}

else{
    console.log("wrong pin")

}



