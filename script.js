"use strict"
const displayParagraph = document.getElementById("displayP");
const cBtn = document.getElementById("Cbtn");
const changeSignBtn = document.getElementById("+/-btn");
const equalsBtn = document.getElementById("equalsbtn");
const divideBtn = document.getElementById("/btn");
const oneBtn = document.getElementById("1btn");
const twoBtn = document.getElementById("2btn");
const threeBtn = document.getElementById("3btn");
const timesBtn = document.getElementById("*btn");
const fourBtn = document.getElementById("4btn");
const fiveBtn = document.getElementById("5btn");
const sixBtn = document.getElementById("6btn");
const plusBtn = document.getElementById("+btn");
const sevenBtn = document.getElementById("7btn");
const eightBtn = document.getElementById("8btn");
const nineBtn = document.getElementById("9btn");
const minusBtn = document.getElementById("-btn");
let numbers = [];
let firstNum = 0
let num = "";
let signs = [];
let result;
let ans;
let saveNum = function(element){
    num += element.textContent;
    console.log(`Num:${num}`)
    displayParagraph.textContent = num;
    if (firstNum != 0) {
        numbers.push(Number(num));
        console.log(numbers)
    }
}
let saveSign = function(element){
    if (firstNum == 0){
        firstNum += Number(num);
        num = "";
        console.log(`firstNum:${firstNum}`)
    }
    num = "";
    signs.push(element.textContent);
    console.log(signs)
    displayParagraph.textContent = element.textContent;
}
let cancel = function(){
    numbers = [];
    num = "";
    signs = [];
    firstNum = 0
    displayParagraph.textContent = "";
    console.log("%ccancel", "background-color:white; color: red;")
}
let equals = function(){
    result = firstNum;
    for (let i = 0; i < numbers.length; i++) {
        if (signs[i] == "+") {
            result += numbers[i]
        } else if (signs[i] == "-") {
            result -= numbers[i]
        }
    }
    displayParagraph.textContent = result
}