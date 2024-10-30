// && - AND o Conjuncion logica

const check = 4 > 3 && 10 > 5 // True
const check1 = 4 > 3 && 10 < 5 // True - False -> False 
const check2 = 4 < 3 && 10 < 5 //false && false -> false

// || - OR o Disuncion logica

const check4 = 4 > 3 || 10 > 5 //true
const check5 = 4 > 3 || 10 < 5 // true
const check6 = 4 < 3 || 10 < 5 // false

// ! - NOT 

let check7 = 4 > 3
let check8 = !(4 > 3) //false
let isLightOn = true
let isLightOff = !isLightOn
let isMarried = !false

//Increment Oerators ++

//pre-incremento
let count = 0
console.log(++count)
console.log(count) //1

//Post incremento 
let count2 = 0
console.log(count2++)
console.log(count2) //1

//Decrememt operators
//predecremento
let count3 = 0
console.log(--count3)
console.log(count3) //1

let count4 = 0
console.log(count4--)
console.log(count4) //1


//Ternary Operators 
let firstCheck = false,
    secondCheck = false,
    access = firstCheck
        ? "Acceso Denegado"
        : secondCheck
            ? "Acceso Denegado"
            : "Acceso Permitido"
console.log(access) //Acceso permitido

let isRaining = true
isRaining
    ? console.log("You need a rain coat")
    : console.log("No need for a rain coat")

