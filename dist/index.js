"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai11_2 = require("./bai11");
const bai12_1 = require("./bai12");
const bai12_2 = require("./bai12");
const bai13_1 = require("./bai13");
console.log("Bai 1");
var person = new bai1_1.Person("NguyenHoangSang", 21);
console.log(person);
console.log("Bai 2");
var student = new bai2_1.Student("NguyenHoangSang", 21, 10);
student.displayInfoAll();
console.log("Bai 3");
var car = new bai3_1.Car("Honda", "Ranger", 2022);
console.log(car);
console.log("Bai 4");
var rectangle = new bai4_1.Rectangle(10, 15);
console.log("Dien tich hinh chu nhat:", rectangle.area());
console.log("Chu vi hinh chu nhat:", rectangle.perimeter());
console.log("Bai 5");
var bankAccount = new bai5_1.BankAccount(0);
if (bankAccount.deposit(100)) {
    console.log("Nap thanh cong\n" + "So du: ", bankAccount);
}
if (bankAccount.withdraw(50)) {
    console.log("Rut thanh cong\n" + "So du: ", bankAccount);
}
else {
    console.log("Rut that bai\n" + "So du: ", bankAccount);
}
if (bankAccount.withdraw(100)) {
    console.log("Rut thanh cong\n" + "So du: ", bankAccount);
}
else {
    console.log("Rut that bai\n" + "So du: ", bankAccount);
}
console.log("Bai 6");
var book = new bai6_1.Book("LTDD", "NHS", 2025);
book.displayInfo();
console.log("Bai 7");
var user = new bai7_1.User("NguyenHoangSang");
console.log(user._name);
user._name = "HoangSang";
console.log(user._name);
console.log("Bai 8");
const products = [
    new bai8_1.Product("Laptop", 1200),
    new bai8_1.Product("Mouse", 25),
    new bai8_1.Product("Keyboard", 120),
];
const filtered = products.filter(p => p.price > 100);
filtered.forEach(p => console.log(p));
console.log("Bai 9");
console.log("Tao interface Animal (Done)");
console.log("Bai 10");
var account = new bai10_1.Account("HoangSang", "12345");
console.log(account);
console.log("Bai 11");
var cat = new bai11_2.Cat("Coco");
var dog = new bai11_1.Dog("Lucy");
cat.meow();
dog.bark();
console.log("Bai 12");
var bird = new bai12_1.Bird("Vet");
var fish = new bai12_2.Fish("Ro");
bird.fly();
fish.swim();
console.log("Bai 13");
const s = new bai13_1.Square(5);
console.log("Square area:", s.area());
const c = new bai13_1.Circle(3);
console.log("Circle area:", c.area());
