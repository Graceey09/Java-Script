let arr = [1, 2, 4, 4, 6, "seven"];
arr[42] = "Forty-two";

console.log(arr);

function sum(x, y){
    return x + y;
}

function square(z){
    return z * z;
}

function sumOfSquare(x, y){
    return sum(square(x), square(y));
}

console.log(sumOfSquare(2, 3))