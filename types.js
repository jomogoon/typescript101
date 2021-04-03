"use strict";
/** Types */
// let aString = "Hi"
var aString;
aString = "Hi";
// let aNum = 5;
var aNum;
aNum = 1;
// let aBool = true;
var aBool;
aBool = false;
// possible but not recommanded
var anyVar = "a string";
anyVar = 5;
var year;
year = 2021;
year = "2021";
// year = false // not allowed
var parsedYear = parseInt(year);
/** arrays */
var arrString = ["1", "2", "3"];
// arrString[0] = 1 //error
arrString[0] = "a";
var arrNumber = [1, 2, 3];
// arrNumber[0] = "1" // error
arrNumber[0] = 10;
var arrBool = [true, false];
// arrBool[0] = 0 //error
arrBool[0] = false;
// mixed array
var arrMix = [1, "a", true];
arrMix[0] = "b";
arrMix.push(false);
// tuple type
var arrTup = ["a string", 5];
arrTup = ["a", 3];
