let raw_array = []
let myRow1 = []


let obj1 = {
    name: "Lagos",
    population: 10000,
    temperature: 11,
    currency: "NG"
}
let obj2 = {
    name: "California",
    population: 10000,
    temperature: 10,
    currency: "$"
}

let obj3 = {
    name: "Los-Angelos",
    population: 10000,
    temperature: 10.0,
    currency: "$"
}


myRow1.push(null)
myRow1.push(obj1)
myRow1.push(obj2)
myRow1.push(obj3)
raw_array.push(myRow1)

let myRow2 =[]
let obj4 = {
    name: "Brazaville",
    population: 10000,
    temperature: 20,
    currency: "FC"
}

let obj5 = {
    name: "Abuja",
    population: 10000,
    temperature: -3,
    currency: "NG"
}

let obj6 = {
    name: "Singapore",
    population: 10000,
    temperature: 5,
    currency: "S$"
}

myRow2.push(obj4)
myRow2.push(obj5)
myRow2.push(obj6)
myRow2.push(null)
raw_array.push(myRow2)

let obj7 = {
    name: "London",
    population: 10000,
    temperature: 10.0,
    currency: "Pounds"
}

let obj8 = {
    name: "Calabar",
    population: 10000,
    temperature: 13,
    currency: "NG"
}

let obj9 = {
    name: "Ilorin",
    population: 10000,
    temperature: 20.5,
    currency: "NG"
}

let myRow3 = []
myRow3.push(obj7)
myRow3.push(null)
myRow3.push(obj8)
myRow3.push(obj9)
raw_array.push(myRow3)

console.table(raw_array)
// console.table(raw_array[0][2])

let sum = 0;

for (let row of raw_array) {
    for (let obj of row) {
        if (obj !== null && obj.temperature <= 10) {
            sum += obj.population;
        }
    }
}

console.log("Total population for objects with temp <= 10:", sum);





