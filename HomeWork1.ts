// 1.1
// length method - to find the length of the string
let str: string = 'AQUASoft Internship';
let strlength: number = str.length;
console.log(strlength);

// includes method - to verify if a substring is in the string
console.log('AQUASoft Internship'.includes('Internship'));

// push method - to add an element to the end of the array
let arg: string[] = ['january', 'february', 'march'];
arg.push('april');
console.log(arg);

// values method - to return an array of the values of an object
interface Person {
  name: string;
  age: number;
  job: string;
}
const person: Person = { name: "Vlada", age: 23, job: "FullStack Intern" };
const values: (string | number)[] = Object.values(person);
console.log(values);

// arrow function - it is a new feature of ES6 by which we don't need the keyword 'function'
const sumArrow = (a: number, b: number): number => a + b;

// 1.2
// var
var a: number = 16; // var has the global scope
function v(): void {
  var b: number = 2; // If created inside a function, it's function-scoped
  console.log(a, b);
}
v();
console.log(a);

// let
function l(): void {
  if (true) {
    let m: number = 9; // Block-scoped
    console.log(m);
  }
  // console.log(m); -> Outside the block, this will give an error
}
l();

// const
const userName: string = 'vlada'; // Block-scoped, and cannot be updated or redeclared
// const name = 'ciubuc'; // This will give an error
console.log(userName);

// 1.3 Spread operator
// Combine multiple arrays
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const array3: number[] = [...array1, ...array2];
console.log(array3);

// Add elements to an array
const array4: number[] = [0, ...array3, 7];
console.log(array4);

// Used with objects
interface Student {
  age: number;
  faculty: string;
  year: number;
}
interface UpdatedStudent extends Student {
  degree: string;
  domain: string;
}
const student: Student = {
  age: 23,
  faculty: 'ACS',
  year: 2,
};

const updateStudent: Partial<UpdatedStudent> = {
  degree: 'master',
  domain: 'computer science',
};

const updatedStudent: UpdatedStudent = { ...student, ...updateStudent } as UpdatedStudent;
console.log(updatedStudent);

// 1.4 Objects
// Iterate over an object using for...in, Object.keys(), Object.values(), or Object.entries()
interface Movie {
  title: string;
  filmDirector: string;
  year: number;
}
const movie: Movie = { title: 'Purple Hearts', filmDirector: 'Elizabeth Allen Rosenbaum', year: 2022 };
for (const key in movie) {
  if (Object.prototype.hasOwnProperty.call(movie, key)) {
    console.log(`${key}: ${movie[key as keyof Movie]}`);
  }
}

Object.entries(movie).map(([key, value]) => {
  console.log(key, value);
});

// Deep copy
const movieList: string[] = ['Game of Thrones', 'Suits', 'Bridgertones'];
const movieListDeepCopy: string[] = JSON.parse(JSON.stringify(movieList));
console.log(movieListDeepCopy);

// 1.5 Arrays
// Accessor methods
let serial: string[] = ['Game of Thrones', 'Suits', 'Bridgertones'];
let serial2: string[] = ['Elite', 'Good Doctor'];
let serial3: string[] = serial.concat(serial2);
let serial4: string = serial.join();
let serial5: string[] = serial.slice(1, 3);
console.log(serial.indexOf('Suits'));
console.log(serial3);
console.log(serial4);
console.log(serial5);

// Mutator methods
let fruits: string[] = ['banana', 'orange', 'peach', 'kiwi'];
console.log(Array.isArray(fruits));
console.log(fruits.pop());
console.log(fruits.shift());

// 1.6 Callbacks and Promises
// Callback
const welcome = (name: string, callback: (name: string) => void): void => {
  console.log(`Hello, ${name}!`);
  callback(name);
};

const goodbye = (name: string): void => {
  console.log(`Goodbye, ${name}!`);
};

welcome('Vlada', goodbye);

// Promise
function fetchedData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

fetchedData()
  .then((data) => {
    console.log(data); // Success handler
  })
  .catch((error) => {
    console.error(error); // Error handler
  });

// 1.7 Async/Await
function fetchedData2(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}
async function getData(): Promise<void> {
  const result: string = await fetchedData2(); // Waits for fetchData() to resolve
  console.log(result);
}
getData();

// 1.8 Closures
function studFunc(): () => void {
  const name: string = "Ciubuc";
  function displayName(): void { // Inner function that forms a closure
    console.log(name);
  }
  return displayName;
}

const mystudFunc: () => void = studFunc();
mystudFunc();
