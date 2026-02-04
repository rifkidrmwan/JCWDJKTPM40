//======= ARRAY============

const arr = [] ; //cara1
const arr2 = new Array (); //cara2

const arrayOfString: string[] = ["A", "B", "C", "D"];
console.log(arrayOfString[2]);


const arrayOfNumber: number[] = [1, 2, 3, 4, 10, 100];
console.log(arrayOfNumber);


const array: (string | number)[] = ["A", "B", "C", "D", 102 ];

interface Student {
    age: number;
    name: string;
}

const siswa: Student = {age: 12, name: "budi"};
console.log(siswa.name); //cara1

console.log(siswa["age"]); //cara2




type Student2 ={
    age: number;
    name: string;
};

const siswa2: Student2 = {age: 13, name: "joko"};

interface siswa extends Student {
    hobby: string;

}

const siswa3: siswa = {
    age: 12, name: "budi", hobby: "mancing",
};

//===== array of object========

const students: Student[] = [
    {name: "jack", age: 20}, // index: 0 length 1
    {name: "udin", age: 19}, // index: 1 length 2
    {name: "moko", age: 21}, // index: 2 length 3
    {name: "batak", age: 25}, // index: 3 length 4
];

console.log(students[2]);

console.log(students[2].name);

console.log(students.length);

//========= FOR OF ===============

const fruits: string[] = ["apple", "banana", "orange"];

for (const fruist of fruits) {
    console.log(fruits);
}

//======FUNCTION=========
// 1. function declaration
/*
    function namaFunc(){
        //logic
        }
    */
    function square () {
        return 5 * 5;
        
    }

    const result = square();

    console.log(result);
    
    console.log(square());
    
    
// 2. function expression
/* 
    const namaFunc = function () {
    // logic
    }

*/

const square2 = function() {
    return 5 * 5;
};
console.log(square2());

//======FUNCTION SCOPE=========
//variable yang didefine didalam function, hanya bisa diakses didalam func tsb

function greeting() {
    const hello: string = "hello"

    console.log(hello);
    
    return hello;
    
}

    //console.log(hello); ini error


greeting();

//========parameter & argument==========
// parameter -> variable yang mewakili value dari argument yang dimasukan
// argumemt -> value yan dimasukan saat pemanggilan function

//====== parameter
function greeting2(name, company? : string) {
    const hello: string = "Hello ";


    if (company) {

    return hello + name + " " + company;
} else {
    return hello + name;
    }
}

//      argument
console.log(greeting2("joko", "grab"));
console.log(greeting2("ujang", "shoppe"));
console.log(greeting2("yanto"));

//========default parameter==========
function multiply (a: number, b: number =10){
    console.log(a);
    console.log(b);

    return a * b
    
}

multiply(5, 2);
multiply(5);

//============= REST PARAMETER==========
//mewakili sisa argument ke dalam 1 parameter

function myFunc(a: number, b: number, ...c: number[]) {
    console.log(a); 
    console.log(b); 
    console.log(c); 

}

myFunc (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

///======== NESTED FUNCTION =============
// fungsi yang berada didalam fungsi 
// innner function -> bisa mengakses parameter dari outer function
// outer function -> tidak bisa mengakses parameter dari inner function

function getMessage(firstname: string) {
    function sayHello() {
        return "Hello " + firstname + ", ";

    }

    function welcome () {
        return "Welcome to purwadikha";

    }

    return sayHello() + welcome();

}

console.log(getMessage("Brandon"));

//============= RECURSIVE ===============
// fungsi yang memanggil dirinya sendiri

function countdown(angka: number) {
    console.log(angka);

    let nextNumber = angka -1

    if (nextNumber > 0) {
        countdown(nextNumber);

    }
    
}

countdown(10);

//====== ARROW FUNCTION ========
// shortcut untuk menuliskan function expression

//function expression
const square3 = function (angka: number) {
    return angka * angka;
};

//arrow function

const square4 = (angka: number) => {
    return angka * angka;
};

//1 line bisa disingkat
const square5 = (angka: number) => angka * angka

//================= ARRAY BUILT IN METHOD =========
// JOIN -> menggabungkan value yang ada dalam array ke bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

//POP -> ,menghilangkan value paling akhir dalam array

const words2: string[] = ["hello", "world", "test"];
console.log(words2);
words2.pop();
console.log(words2);

//SHIFT-> menghilangkan value paling depan dalam array
const words3: string[] = ["hello", "world", "test"];
console.log(words3);
words3.shift();
console.log(words3);

//UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["hello", "world", "test"]
console.log(words4);
words4.unshift("joko")
console.log(words4);

// PUSH -> menambahkan value ke urutan paling akhir array

const words5: string[] = ["hello", "world", "test"];
console.log(words5);
words5.push("siti")
console.log(words5);

//SPLICE -> menghapus, mengannti atau menambahkan value pada array
// syntax -> splice ( startIndex, brpaYangMauDiDelete, item)

const ,months: string[] = ["jan", "mar", "apr", "jun"];

//menambahkan data
months.splice(1, 0 "feb");
console.log(months);

//menghapus data
months.splice(4, 1);
console.log(months);

//edit data
months.splice(3, 1 " may" );
console.log(months);

//SORT -> mengurutkan isi array berupa string / number
const fruits2: string[] = ["banana", "orange", "Apple", "manggo"];
    fruits2.sort();
    console.log(fruits2);
    console.log(fruits2.reverse());


const numbers: number [] = [4, 9, 3, 7, 2, 5, 10];
numbers.sort((a, b)=> a - b); // asc
// numbers.sort((a,b)=>) a- b); // desc
console.log(numbers); 


    













