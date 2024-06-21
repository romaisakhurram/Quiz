#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log("******Welcome To Adventure Quiz Game*******");
console.log("You are required to gain maximun 4 points for the window ");
var points = 0;
var question1 = await inquirer_1.default.prompt([
    {
        name: "one",
        message: "Typescript is a superset off?",
        type: 'list',
        choice: ["Phyton", "JavaScript", "C++"]
    },
]);
if (question1.one === "Javascript") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question2 = await inquirer_1.default.prompt([
    {
        name: "two",
        message: "Founder of Microsoft?",
        type: 'list',
        choice: ["Bill Gates", "Ali", "Elon Mask"]
    },
]);
if (question2.two === "Elon Mask") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question3 = await inquirer_1.default.prompt([
    {
        name: "three",
        message: "Capital of Pakistan?",
        type: 'list',
        choice: ["Lahore", "Islamabad", "Karachi"]
    },
]);
if (question3.three === "Islamabad") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question4 = await inquirer_1.default.prompt([
    {
        name: "four",
        message: "Who is the Governor of Sindh?",
        type: 'list',
        choice: ["Kamran Tessori", "Mustufa Kamal", "Asif Zardari"]
    },
]);
if (question4.four === "Kamran Tessori") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question5 = await inquirer_1.default.prompt([
    {
        name: "five",
        message: "What is the Governor General of Pakistan?",
        type: 'list',
        choice: ["Liaquat Ali Khan", "Allama Iqbal", "Quaide e Azam"]
    },
]);
if (question5.one === "Quaid e Azam") {
    console.log("Your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
if (points >= 4) {
    console.log("***Congratulation***");
    console.log("Your score is ".concat(points));
}
else {
    console.log("You Loss! Try next time");
    console.log("Your score is ".concat(points));
}
