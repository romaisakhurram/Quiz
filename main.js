#! /usr/bin/env node
import inquirer from "inquirer";
console.log("******Welcome To Adventure Quiz Game*******");
console.log("You are required to gain maximun 4 points for the window ");
let points = 0;
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "Typescript is a superset off?",
        type: 'list',
        choices: ["Phyton", "Java Script", "C++"]
    },
]);
if (question1.one === "Java Script") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Founder of Microsoft?",
        type: 'list',
        choices: ["Bill Gates", "Ali", "Elon Mask"]
    },
]);
if (question2.two === "Elon Mask") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "Capital of Pakistan?",
        type: 'list',
        choices: ["Lahore", "Islamabad", "Karachi"]
    },
]);
if (question3.three === "Islamabad") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Who is the Governor of Sindh?",
        type: 'list',
        choices: ["Kamran Tessori", "Mustufa Kamal", "Asif Zardari"]
    },
]);
if (question4.four === "Kamran Tessori") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "What is the Governor General of Pakistan?",
        type: 'list',
        choices: ["Liaquat Ali Khan", "Allama Iqbal", "Quaid e Azam"]
    },
]);
if (question5.five === "Quaid e Azam") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
if (points >= 4) {
    console.log("***Congratulation You Won***");
    console.log(`Your score is ${points}`);
}
else {
    console.log("You Loss! Try next time");
    console.log(`Your score is ${points}`);
}
