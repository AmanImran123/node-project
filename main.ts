import {log} from 'console';
import inquirer from 'inquirer'

let currencyconverter ={
 'USD':{
    "USA": 1,
    "ERU": 0.92,
    "PKR":278
},
"ERU":{
    "USA": 1.08,
    "ERU": 1,
    "PKR":300
},
"PKR":{
    "USA": 0.004,
    "ERU": 0.003,
    "PKR": 1
},
}

const answer : {
    from:"USD"|"ERU"|"PKR",
    to:"USD"|"ERU"|"PKR",
    amount:number
} = await inquirer.prompt(
   [
    {
        name:"from",
        message: " enter your currency which you want to convert?",
        type:"list",
        choices:["USD","ERU","PKR"]
    },
    {
        name:"to",
        message: " select which currency you convert?",
        type:"list",
        choices:["USD","ERU","PKR"]
    },
    {
        name:"amount",
        message: " enter the amount which you want to convert?",
        type:"number",
        choices:["USD","ERU","PKR"]
    }
   ] 
)

const {from, to, amount} = answer;

if(from && to && amount){
    const result = currencyconverter[from][to] * amount;
    console.log(` you converstion from ${from} to ${to} is ${amount}`)

} else{
    console.log("please enter the valid input")
}




