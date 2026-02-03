// ==============================
// CEK GANJIL / GENAP
// ==============================
let angka: number = 25;

if (angka % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// ==============================
// CEK BILANGAN PRIMA
// ==============================
let bil: number = 5;
let prima: boolean = true;

if (bil <= 1) {
  prima = false;
}

for (let i = 2; i < bil; i++) {
  if (bil % i === 0) {
    prima = false;
    break;
  }
}

if (prima) {
  console.log("Prime Number");
} else {
  console.log("Not a prime number");
}

// ==============================
// JUMLAH 1 SAMPAI N
// ==============================
let n: number = 5;
let total: number = 0;

for (let i = 1; i <= n; i++) {
  total = total + i;
}

console.log(total);

// ==============================
// FAKTORIAL
// ==============================
let faktorial: number = 4;
let result: number = 1;

for (let i = faktorial; i >= 1; i--) {
  result = result * i;
}

console.log(result);

// ==============================
// FIBONACCI
// ==============================
let jumlah: number = 15;
let a: number = 0;
let b: number = 1;

for (let i = 1; i <= jumlah; i++) {
  console.log(b);
  let next: number = a + b;
  a = b;
  b = next;
}
