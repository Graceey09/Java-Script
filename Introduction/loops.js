let array = [5, 6, 3, 6, 8, 3, 6]

console.table(array)

for(let i in array){
    process.stdout.write(`${i} `)
}
console.log()

for(let i of array){
    process.stdout.write(`${i} `)
}

let obj = {
    name: "Esther",
    age: 23,
    height: "5'4",
    cohort: 17
}

let objVal = Object.values(obj)
let objKey = Object.keys(obj)

console.log()
for(let i of objKey){
    process.stdout.write(`${i} `)
}