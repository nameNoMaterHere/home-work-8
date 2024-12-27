//1
function yourName(){
    // let firstName=document.createElement("div")
    // let lastName=document.createElement("div")
    let inputDiv=document.getElementById("name")
    let firstName=document.createElement("input")
    firstName.type="text"
    firstName.className="firstNameInput"
    firstName.placeholder="enter your first name:"
    let lastName=document.createElement("input")
    lastName.type="text"
    lastName.className="lastNameinput"
    lastName.placeholder="enter your last name:"
    inputDiv.append(firstName)
    inputDiv.append(lastName)
    let checkButton=document.createElement("button")
    checkButton.textContent="confirm"
    inputDiv.append(checkButton)
    checkButton.onclick=()=>{creatDivForTheName(firstName.value,lastName.value)}
}
function creatDivForTheName(firstName,lastName){
    let inputDiv=document.getElementById("name")
    let firstNameDiv=document.createElement("div")
    firstNameDiv.innerText=firstName
    firstNameDiv.classList="firsName"
    inputDiv.append(firstNameDiv)
    let lastNameDiv=document.createElement("div")
    lastNameDiv.innerText=lastName
    lastNameDiv.classList="lastName"
    inputDiv.append(lastNameDiv)
}
yourName()