
// ======== Exercise 1 ========

function printTriangle(height: number) {
  let counter: number = 1; // number counter

  for (let i = 1; i <= height; i++) {
    let row: string = "";

    for (let j = 1; j <= i; j++) {
      row += counter.toString().padStart(2, "0") + " ";
      counter++;
    }

    console.log(row);
  }
}

// function call
printTriangle(4);




//========== Exercise 2 ==========

// ======== Exercise 2 ========

function FizzBuzz(n: number) {
  for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");

    } else if (i % 3 === 0) {
      console.log("Fizz");

    } else if (i % 5 === 0) {
      console.log("Buzz");

    } else {
      console.log(i);
    }

  }
}

FizzBuzz(15);

//exercise3 
function calculateBMI(weight: number, height: number): string {
  const bmi: number = weight / (height * height);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi <= 24.9) {
    return "ideal";
  } else if (bmi <= 29.9) {
    return "overweight";
  } else if (bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(calculateBMI(60, 1.65));


//exercise4

function getEvenNumbers(numbers: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

//exercise 5
function splitWords(text: string): string[] {
  return text.split(" WS");
}

console.log(splitWords("Hello world"));




