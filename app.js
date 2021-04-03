"use strict";
var inputName = document.querySelector('#name'); // type casting required
var inputAge = document.querySelector('#age'); // type casting required
// const inputForm = document.querySelector('form');  // type casting not required
var inputForm = document.querySelector('form'); // (1) sepcify type
var greeting = document.querySelector('.greeting');
var Man = /** @class */ (function () {
    function Man(name, age) {
        this.name = name;
        this.age = age;
    }
    Man.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age + ".";
    };
    return Man;
}());
// inputForm?.addEventListener('submit', () => { // '?' required if type is not specified above (1)
inputForm.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent change
    var person = new Man(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
