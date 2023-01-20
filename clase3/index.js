// const id = 10;

// const obj = {
//     foo: "bar",
//     ["baz" + (id + 4) ]: 42
// }

// {
//     foo: "bar",
//     baz14: 42
// }

// const lastname = "Messi";

// const person = {
//     name: "Adrian",
//     lastname: "Solimano",
//     email: "aaa@bbb.com"
// }

// const { lastname: surname } = person;

// console.log(surname)

// var [a = 1, b = 2, c = 3, d] = [4, 5, 9, 9]

// console.log(a, b, c, d);




const users = ["Andres", "Enzo", "Felipe", "Adrián"];


// const saludo = users.map(user => {
//     return `Hola ${user}`
// })

// console.log(saludo);


Array.prototype.myMap = function(callback) {

    const rta = []

    for(let i = 0; i < this.length; i++) {
        rta.push(callback(this[i]))
    }

    return rta;
    
}

const saludo1 = users.map(user => {
    return `Hola ${user}`
})

const saludo2 = users.myMap(user => {
    return `Hola ${user}`
})

const saludo3 = users.myMap(user => {
    return `Chau ${user}`
})

console.log(saludo1);
console.log(saludo2);
console.log(saludo3);





















