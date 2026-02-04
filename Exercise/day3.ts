// #==== IF STATEMENT #

/**
 *
 *   if ( condition ){
 *  codeblock
 *  }
 *
 */

const age: number = 20;

if (age >= 17) {
  console.log("anda bisa buat ktp");
}

// #==== Else STATEMENT #

const age2: number = 10;

if (age2 >= 17) {
  console.log("anda bisa buat ktp");
} else {
  console.log("anda belom bs buat katepe");
}

// #==== Else If STATEMENT #

const grade: string = "A";

if (grade === "A") {
  console.log("Nilai Bagus");
} else if (grade === "B") {
  console.log("Lumayan");
} else if (grade === "C") {
  console.log("Buruk");
} else {
  console.log("Failed");
}

let gradeFinalExam: String = "C";

switch (gradeFinalExam) {
  case "A":
  case "B":
    console.log("nilai Bagus");
    break;
  case "C":
    console.log("nilai Lumayan");
    break;
  default:
    console.log("tidak ad nilai");
    break;
}


let hari: String = "Senin";

switch (hari) {
  case "Senin":
    console.log(" Hari ini Hari Senin");
    break;
  case "Selasa":
    console.log(" Hari ini Hari Selasa");
    break;
  case "Rabu":
    console.log("Rebu");
    break;
  case "Kamis":
    console.log("Kamis ");
    break;
  case "Jumat":
    console.log(" Hari ini Hari Jumat");
    break;
  case "Sabtu":
    console.log(" Hari ini Hari Sabtu");
    break;
  case "Minggu":
    console.log(" Hari ini Hari Minggu");
    break;
  default:
    console.log("Tidak Ada Hari Itu");
    break;
}

    // ======= LOGICAL OPERATOR ====== //
    // && -> and
    // || -> or
    // ! -> not 

    // AND -> harus kedua kondisinya bernilai true agar menghasilkan nilai true 
    const umur: number = 20;
    const punyaSIM: boolean = true;

    if (umur >= 17 && punyaSIM === true) {
        console.log("boleh bawa kendaraan");
    } else {
        console.log("belom boleh bawa kendaraan");
        
    }

    //OR -> kalau salah satu ada yang nilai nya true, akan menghasilkan nilai true
    const car : string = "mercy"

    if (car === "mercy" || car === "bmw") {
        console.log("mobil eropa");
        
    } else {
        console.log("mobil jepang");
    }

    //NOT ->  membalikan nilai boolean 
    const isSunny: boolean = false;
    const isRaining: boolean = !isSunny;

    console.log(isSunny);
    console.log(isRaining);

    // ======= TERNARY OPERATOR ====== //
    // shortcut untuk if else condition
    // condition ? true :false 

    const str: string = "javascript";

    //cara panjang 
    if (str === "javascript") {
        console.log("javascript");
    } else {
        console.log("not javascript");
        
    }

    //cara pendek

    console.log(str === "javascript" ? "javascript": "not javascript" );

// ======= LOOP STATEMENT (perulangan) ==========

//tipe loop : for loop, while loop, do while loop

// For LOOP -> punya 3 statement
// Statement 1 -> menginisialisasikan variable dari looping itu sendiri
// Statement 2 -> mendefine kondisi dari looping tsb
// statement 3 -> kode yang akan di eksekusi diakhir disetiap literasi

/*
    for (statement1;statement2;statement3){
        code block yang akan diulang
        }
*/

for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 10; i++) {
        console.log("hello world");

    }
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log("hello world");
        

    }
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//WHILE LOOP 
/* while(condition) {
    code block yang akan diulang 
  }
*/

let i: number = 1;

while (i < 10 ) {
    console.log(i);
    i++;
}

//DO WHILE LOOP
/* 
    do {
    code block yang akan diulang
    } while (condition)
    */

let count: number= 100;

do {
    console.log(count); 100
    count++;
} while (count <= 5);

// BREAK -> menghentikan looping 
let sum: number = 0;

while (true) {

 console.log(sum);

if (sum >= 5) {
    break;
}
    sum++;
}

//continue -> skip looping
for (let i = 0; i < 5; i++) {
    if(i === 2) continue;
    
console.log();

}