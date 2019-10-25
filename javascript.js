function controle(){
let firstNumber = document.getElementById("firstNumber").value;
let secondNumber = document.getElementById("secondNumber").value;
let result = (Math.trunc(firstNumber)) * secondNumber;

alert(`Le résultat est de ${result}, ça va ?`);
}
