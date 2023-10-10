// function tableFor(event, journal) {
// let table = [0, 0, 0, 0];
// for (let i = 0; i < journal.length; i++) {
// let entry = journal[i], index = 0;
// if (entry.events.includes(event)) index += 1;
// if (entry.squirrel) index += 2;
// table[index] += 1;
// }
// return table;
// }
// console.log(tableFor("pizza", JOURNAL));

// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt((table[2] + table[3]) *
//     (table[0] + table[1]) *
//     (table[1] + table[3]) *
//     (table[0] + table[2]));
// }
// console.log(phi([76, 9, 4, 1]));


let todoList = [];
function remember(task) {
todoList.push(task);
}
function getTask() {
return todoList.shift();
}
function rememberUrgently(task) {
todoList.unshift(task);
}
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
