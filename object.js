"use strict";
var person = {
    name: "Jesse",
    age: 25
};
// person = "him" //
person.name = "John";
var yyyy;
yyyy = "2021";
yyyy = 2021;
/** functions */
function calcSUM(a, b) {
    return a + b;
}
calcSUM(2, 2);
// declare function spec first
var calcSumType;
calcSumType = function (first, second) {
    return first + second;
};
calcSumType(4, 5);
calcSumType(4, 5, 6);
var sayHi = function () {
    console.log('hi~');
};
// just object
var mike = {
    name: "Mike",
    age: "22"
};
// PersonInterface interface
var john = {
    name: "John",
    // age: "22" // error
    age: 22
};
var Person = /** @class */ (function () {
    // email: string; // cannot add
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age + ".";
    };
    return Person;
}());
