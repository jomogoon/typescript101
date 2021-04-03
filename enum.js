"use strict";
/** assign decriptive value */
var ManufactureMake;
(function (ManufactureMake) {
    ManufactureMake[ManufactureMake["TESLA"] = 0] = "TESLA";
    ManufactureMake[ManufactureMake["AUDI"] = 1] = "AUDI";
    ManufactureMake[ManufactureMake["MERCEDES"] = 2] = "MERCEDES";
    ManufactureMake[ManufactureMake["VOLVO"] = 3] = "VOLVO";
    ManufactureMake[ManufactureMake["BMW"] = 4] = "BMW";
})(ManufactureMake || (ManufactureMake = {}));
var myCar = {
    year: 2021,
    make: ManufactureMake.VOLVO
};
console.log(myCar.make);
