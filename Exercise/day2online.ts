let lenght: number = 5;
let width: number = 3;

let area: number = lenght * width;
console.log("area of rectangle:", area);


//===========

let p: number = 5;
let w: number = 3;
    
let perimeter: number = 2 * (p + w);
console.log("perimeter of rectangle:", perimeter);

//=============

let radius: number = 5;

let diameter: number =  2 * radius;
let circumference: number = 2 * Math.PI * radius;
let circleArea: number = Math.PI * radius * radius;

console.log("Diameter: ", diameter );
console.log("circumference", circumference.toFixed(5));
console.log("Area:", circleArea.toFixed(3));


//============


let a: number = 80;
let b: number = 65;

let c: number = 180 -(a + b);
console.log("thrid angle", c);

//=============

let totalDays: number = 400;

let years: number = Math.floor(totalDays / 365);
let remaningDays: number = (totalDays % 365);
let months: number = Math.floor(remaningDays / 30);
let dayleft: number = remaningDays % 30;

console.log(`${years} year(s), ${months} month(s), ${dayleft} day(s)`);

//===========

let date1 : Date = new Date ("2022-01-20");
let date2 : Date = new Date ("2022-01-22");

let difference: number = Math.abs(
    (date2.getTime() - date1.getTime()) / ( 1000 * 60 * 60 * 24)

);
console.log("difference in days:", difference);





