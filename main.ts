#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 12000;
let pinCode = 1234;

let pinAnswer= await inquirer.prompt([
    {
        name:"pin",
        message:"Enter Your Pin",
        type:"number"

    }
]);

if(pinAnswer.pin === pinCode){
    console.log("Correct pin code");

    let operationAns= await inquirer.prompt([
        {
            name:"operation",
            message:"Please Select Operation",
            type:"list",
            choices:["Withdraw","Fast cash","Cash deposit","Check balance"]
        }
    ]);

    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message:"Enter Your Amount",
                type:"number"
            }
        ]);
        if(amountAns.amount <myBalance){
            myBalance -= amountAns.amount;
            console.log(`Now Your Balance is ${myBalance} `)
        }
        else{console.log("Insufficient Balance")};
    }
    else if(operationAns.operation === "Fast cash"){
        let selectAmount = await inquirer.prompt([{
            name:"amount1",
            message:"Select Cash",
            type:"list",
            choices:["1000","5000","10000"],
        }]);
        if(selectAmount.amount1 === "1000"){
           myBalance -= selectAmount.amount1
           console.log(`Now Your Balance is : ${myBalance}`)
        }
        if(selectAmount.amount1 === "5000"){
            myBalance -= selectAmount.amount1
            console.log(`Now Your Balance is: ${myBalance}`)
        }
        if(selectAmount.amount1 === "10000"){
            myBalance -= selectAmount.amount1
            console.log(`Now Your Balance is: ${myBalance}`)
        }
        else if(operationAns.operation === "Cash deposit"){
            let amountAns = await inquirer.prompt([
                {
                    name:"amount",
                    message:"Enter Your Amount",
                    type:"number"
                }
            ]);
            myBalance += amountAns.amount;
           console.log(`Now Your Balance is :${myBalance}`);
        }
        else if(operationAns.operation === "Check balance"){
            console.log(`Your Balance is:${myBalance}`)
        };
    }
      else{console.log("Incorrect Pin Code")}
    }