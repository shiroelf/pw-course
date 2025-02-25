let car = {
    make : "Toyota",
    model : "Corolla",
    year : 2021
}

console.log(car.year);
let person = {
    name : "Van",
    address : {
        street : "Le Van Luong",
        city : "Ha Noi",
        country : "Viet Nam"
    }
}

console.log(person.address.street);

let student = {
    name : "Van",
    grades : ["math", "english"]
}

console.log(student.grades[0]);

let products = [
    { name: "Iphone", price: 1000 },
    { name: "Samsung", price: 2000 }
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name, products[i].price);
}

let settings = {
    volume : "loud",
    brightness : "high"
}

settings["volume"] = "low";
console.log(settings);

let bike = {
    make : "Honda",
    model : "Wave",
    year : 2020
}
bike["color"] = "red";

console.log(bike);

let employee = {
    name : "Van",
    age : 25
}

delete employee.age;
console.log(employee);

const school = {
    classA : ["Van", "Hoa"],
    classB : ["Hai", "Huong"]
}
console.log(school)


