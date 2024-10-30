let firstName = 'Pedro'
let lastName = 'Pony'
let country = 'México'
let city = 'Playa del Carmen'
let age = 7
let isMarried = false
let year = 2005

console.log("firstName:", typeof firstName)
console.log("lastName:", typeof lastName)
console.log("country:", typeof country)
console.log("city:", typeof city)
console.log("age:", typeof age)
console.log("isMarried:", typeof isMarried)
console.log("year:", typeof year)

//Check if type of '10' is equal to 10 
console.log("'10' == 10:", typeof '10' === typeof 10)

//Check if parseInt('9.8') is equal to 10 
console.log("parseInt('9.8') == 10:", parseInt('9.8') === 10)

//Boolean value is either true or false.
console.log(!!1)
console.log(!!"hello")
console.log(!!{})

console.log(!!0)
console.log(!!"")
console.log(!!null)

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() 
console.log("4 > 3:", 4 > 3)
console.log("4 >= 3:", 4 >= 3)
console.log("4 < 3:", 4 < 3)
console.log("4 <= 3:", 4 <= 3)
console.log("4 == 4:", 4 == 4)
console.log("4 === 4:", 4 === 4)
console.log("4 != 4:", 4 != 4)
console.log("4 !== 4:", 4 !== 4)
console.log("4 != '4':", 4 != '4')
console.log("4 == '4':", 4 == '4')
console.log("4 === '4':", 4 === '4')

//6 Use the Date object to do the following activities 
let now = new Date();
console.log("El año actual es:", now.getFullYear())
console.log("El mes actual como numero es:", now.getMonth() + 1) // +1 porque los meses empiezan desde 0
console.log("Fecha de hoy es:", now.getDate())
console.log("El dia de hoy como numero es:", now.getDay())
console.log("La hora actual es:", now.getHours())
console.log("Los Minutos actuales son:", now.getMinutes())
console.log("Los segundos desde el 1 de enero de 1970 hasta ahora es:", Math.floor(Date.now() / 1000))

//Write a script that prompts the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 
let base = prompt("Introduce la medida de la base del triangulo:")
let height = prompt("Introduce la altura del triangulo:")
let area = 0.5 * base * height
console.log(`El area del triangulo es: ${area}`)

//Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c) 
let sideA = parseFloat(prompt("Ingresa la medida del lado A del triangulo:"))
let sideB = parseFloat(prompt("Ingresa la medida del lado B del triangulo:"))
let sideC = parseFloat(prompt("Ingresa la medida del lado C del triangulo:"))
let perimeter = sideA + sideB + sideC
console.log(`El perimetro del triangulo es de: ${perimeter}`)
