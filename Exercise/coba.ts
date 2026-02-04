///=== cek ganjil genap
let angka: number = 2;
if (angka % 2 === 0) {
    console.log("bilangan genap");
} else { 
    console.log("bilangan ganjil");

}

//=====cek bilangan prima

let bil : number = 7;
let prima: boolean = true;

if (bil <= 1 ) { 

    prima = false ;
}

for(let i = 2; i <bil; i ++) {
    if (bil % i === 0) {
        prima = false;
        break;
    }
}


let n: number = 5;
let total: number  = 0;

for (let i = 1; i <= n; i++ ) {
    total = total + i;

}

console.log(total);


