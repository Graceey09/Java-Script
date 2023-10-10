function arrayToList(arr) {
    if (arr.length === 0) {
        return null;
    }
    return {
        value: arr[0],
        rest: arrayToList(arr.slice(1))
    };
}

let array = [1, 2, 3];
let list = arrayToList(array);

function listToArray(list) {
    let array = [];
    let current = list;
    while (current !== null) {
        array.push(current.value);
        current = current.rest;
    }
    return array;
}

function prepend(element, list) {
    return { value: element, rest: list };
}

function nth(list, position) {
    if (list === null) {
        return undefined;
    } else if (position === 0) {
        return list.value;
    } else {
        return nth(list.rest, position - 1);
    }
}

function nthRecursive(list, position) {
    if (list === null) {
        return undefined;
    } else if (position === 0) {
        return list.value;
    } else {
        return nthRecursive(list.rest, position - 1);
    }
}

let myList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log("List to Array:", listToArray(list));
console.log("List after Prepending 0:", JSON.stringify(prepend(0, list), null, 2));
console.log("Element at position 2 (zero-based index):", nth(list, 2));
console.log("Element at position 2 using recursive nth:", nthRecursive(list, 2));

console.log(JSON.stringify(list, null, 2));




