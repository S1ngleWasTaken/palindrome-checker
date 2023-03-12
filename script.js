const inputField = document.getElementById("input");
const paragraph = document.getElementById("paragraph")
let text = "";
let reversedText ="";
let check = function(){
    let arr = inputField.value.toLowerCase().trim().replace(/\s/g, '').split("");
    if(arr.length > 22){
        paragraph.textContent = "too long... use <= 22 letters"
        paragraph.style.color = "red";
    } else {
        for(let i = 0; i < arr.length; i++){
            text = text + arr[i]
        }
        for(let i = 0; i < arr.length; i++){
            reversedText = reversedText + arr.reverse()[i]
        }
        if (text == reversedText) {
            paragraph.textContent = "this is a palindrome"
            paragraph.style.color = "#7cff4d";
        } else{
            paragraph.textContent = "this is not a palindrome"
            paragraph.style.color = "red";
        }
        }
    text = ""
    reversedText = ""
}