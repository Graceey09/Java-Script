function customRange(start, end, step = 1) {
    let numbers = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            numbers.push(i);
        }
    } else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            numbers.push(i);
        }
    } else {
        throw new Error("Step value cannot be zero.");
    }
    return numbers;
}

let evenNumbers = customRange(1, 10, 2); 
let decreasingNumbers = customRange(5, 2, -1); 

console.log("Even Numbers Array:", evenNumbers);
console.log("Decreasing Numbers Array:", decreasingNumbers);

