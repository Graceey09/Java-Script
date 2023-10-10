function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }

    if (value1 == null || typeof value1 != "object" || value2 == null || typeof value2 != "object") {
        return false;
    }

    let keys1 = Object.keys(value1);
    let keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
}

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { a: 1, b: { c: 2 } };
let obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); 
console.log(deepEqual(obj1, obj3)); 
