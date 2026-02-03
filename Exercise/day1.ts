// ========STRING BUILT IN METHOD=========
const name: string = "Bubdi";
const hello: string = "hello world";


console.log(name.toLowerCase()); 
console.log(name.toUpperCase()); 
console.log(name.replace("B", "P")); 
console.log(name.toLowerCase().replaceAll("b", "P")); 
console.log(name.split(""));


// ========== TEMPLATE LITTERALS============
const welcome: string = "Hello";
const nama: string = "budi"

console.log(welcome + " " + nama); 
console.log(`${welcome} ${nama}`);  

// ========= NUMBER BUILT IN METHOD ========
const angka: string = "4000"
console.log(Number(angka));
console.log(parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//=======STRING CONVERSION========
const angka2: number = 5000;

console.log(angka2);
console.log(String(angka2));
console.log(angka2.toString());

//====bOOLEAN Conversion========

console.log(Boolean(1));

//==========date======
const now: Date = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

now.setDate(10);
now.setMonth(2);
now.setFullYear(1990);

console.log(now);

//  ======= BASIC OPERATOR=========
/*
    + -> pertambahan
    - -> pengurangan
    * -> perkalian 
    / -> pembagian
    % -> modulo
    ** -> pangkat
*/

console.log(1 + 1);
console.log(17 % 4);

// ====== modify in place =======
let n: number = 4;

n += 2 ; // -> n = n + 2
console.log(n);

// ======= Increment & Decrement ========
let counter: number = 3;
counter++;
counter--

counter

//======= POSTFIX & PREFIX===========

let counter2: number = 2;

console.log(counter2++); //ditampilkan dulu baru ditambahkan
console.log(++counter2); //ditambahkan dulu baru ditampilkan

//console.log(counter2);

//=========== COMPARISON OPERATOR ===============

/*
    ==
    ===
    <
    >
    <=
    >=
*/
console.log( 2 =="2");
console.log( 2 ==="2");
console.log(2>5);
console.log(2<5);
console.log(5<5);
console.log(5<=5);
console.log(5>=5);
console.log(5!=5);
 
//=======MATH========

//match ceil->membulatkan angkanya keatas
console.log(Math. ceil (4.2));

//match floor->membulatkan angkanya kebawah
console.log(Math. floor (4.7));

//match round->membulatkan angkanya ke bilangan bulat terdekat
console.log(Math. round (4.3));
console.log(Math. round (4.7));

//math max->mengembalikan angka terbesar dari sekumpulan angka
console.log(Math. max(10, 17, 8, 29, 30));

////math min->mengembalikan angka terkecil dari sekumpulan angka
console.log(Math. min( 29, 3, 4, 4, 9, 4));

//math abs-> menghilangkan tanda negatif
console.log(Math. abs(-700));

//math random -> mengahasilkan angka acak dari 0-1
console.log(Math. random());

//angka random dari 1- 100
console.log(Math. floor(Math.random() * 100) + 1);

////angka random dari min value - max value

const min: number =10;
const max: number =20;

console.log(Math. floor(Math. random() * )(max - min + 1));
















;












