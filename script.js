function checkPassword(){

let password=document.getElementById("password").value
let strengthBar=document.getElementById("strength")
let result=document.getElementById("result")
let tips=document.getElementById("tips")
let suggestions=document.getElementById("suggestions")

let score=0
tips.innerHTML=""
suggestions.innerHTML=""

if(password.length>=8){
score++
}else{
tips.innerHTML+="<li>Use at least 8 characters</li>"
}

if(/[A-Z]/.test(password)){
score++
}else{
tips.innerHTML+="<li>Add uppercase letters</li>"
}

if(/[0-9]/.test(password)){
score++
}else{
tips.innerHTML+="<li>Add numbers</li>"
}

if(/[!@#$%^&*]/.test(password)){
score++
}else{
tips.innerHTML+="<li>Add special characters</li>"
}

if(score==1){
strengthBar.style.width="25%"
strengthBar.style.background="red"
result.innerText="Weak Password"
}

if(score==2){
strengthBar.style.width="50%"
strengthBar.style.background="orange"
result.innerText="Moderate Password"
}

if(score==3){
strengthBar.style.width="75%"
strengthBar.style.background="yellow"
result.innerText="Strong Password"
}

if(score==4){
strengthBar.style.width="100%"
strengthBar.style.background="green"
result.innerText="Very Strong Password"
}

generateSuggestions(password)

}

function generateSuggestions(password){

let suggestions=document.getElementById("suggestions")

for(let i=0;i<3;i++){

let random=Math.random().toString(36).substring(2,6)

let newPass=password+random+"@"

suggestions.innerHTML+=newPass+"<br>"

}

}