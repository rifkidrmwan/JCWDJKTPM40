console.log("Hello World");
    
// ini adalah comment

/*
    ini
    adalah
    comment
*/


// ======= variable ========
// storage / penampungan data
// var, let, const

var person = "budi";
console.log(person);

let person2 = "joko";
console.log("ni isi person2 sebelum  isi ulang : ", person2);
person2 = "jack";
console.log(" si isi person2 sebelum di isi ulang: ", person2);

const person3 = "siti";
console.log( person3);
// person3 = "test"; ,-// ini ga bakalan bisa
// ========= VARIABLE NAMING ===============
/*
    - must constain only letters, digit or symbol $ dan _
    - the first character must no digit 
    - case sensitive
*/

const company_Name = "Purwadhika"; //camel case
const companame = "Purwadhika"; //pascal case
const company_Name = "Purwadhika"; //snake case

// =============== DATA TYPES ==========
// primitive data types :string, number, boolean, null & undefined
// non primitive data types : object & array

// string -> '', " ", ``
console.log ("Purwadhika");
console.log ('Purwadhika');
console.log (`Purwadhika`);

// number -> 10, 20, 100, 1000
console.log (10);
console.log (20);
console.log (100);

// boolean -> true or false 
console.log (true); true 
console.log (false); false

// null -> menandakan sebuah value itu masih kosong dan belum terisi
const orang = null;

//undefined -> js tidak tau isinya
const orang2 = undefined;

console.log(typeof companyName); 'string'
console.log(typeof 1000); 'number'
console.log(typeof true); 'boolean'
console.log(typeof orang); 'object'
console.log(typeof orang2); 'undefined'





