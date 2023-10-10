let obj = {
    id: "1234",
    available: "true",
    count: "9",
    name: "Grace",
    author: "Jane Austine"

}

// new object
obj.id = Number(obj.id).valueOf();
obj.available = Boolean(obj.available)
obj.count = Number(obj.count)


console.log(obj.id)
console.log(obj.available)
console.log(obj.count)
console.log(obj.name)
console.log(obj.author)
