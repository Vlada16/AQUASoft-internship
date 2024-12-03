//1.1
//length method - to find the legth of the string
let str = 'AQUASoft Internship';
let length = str.length;
console.log(length);

//includes method - to verify if a substring is in the string
console.log('AQUASoft Internship'.includes('Internship'));

//push method - to add an element to the end of the array
let arg = ['january', 'february', 'march'];
arg.push ('april');
console.log(arg);

//values method - to return an array of the values of an object
const person = { name: "Vlada", age: 23, job: "FullStack Intern" };
const values = Object.values(person);
console.log(values); 

//arrow function -  it is a new feature of es6 by which we don't need the keyword 'function'
const sumArrow = (a, b) => a + b;

//1.2
//var
var a = 16; // var has the global scoped so if I create a var outside of the function i can use it everywhere

function v() {
    var b = 2 // if I create a var inside of the function i can use it only within that function.
    console.log(a, b)
}
v();
console.log (a);
//let
function l() {
    if (true){
    let m = 9// let has the block scope so if i declare a variable inside of block it can't be used outside of it
    console.log(m);
    }
   // console.log(m); ->outside of the block we will receive an error
} 
l();
//const
const name = 'vlada' // const is block scopet but also it can't be updated or redeclared
//const name = 'ciubuc' if we try this we will have an error
console.log(name);

//1.3 Spread operator

//used to combine multiple arrays
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [...array1, ...array2];
console.log(array3);

//used to add elemnets to an array
const array4 = [0,...array3, 7];
console.log(array4);

//used with objects
const student = {
    age: 23,
    faculty: 'ACS',
    year: 2
  }
  
  const updateStudent = {
    degree: 'master',
    domain: 'computer science', 
  }
  
  const UpdatedStudent = {...student, ...updateStudent}
  console.log(UpdatedStudent);

//1.4  Objects
//we can iterate over an object using for...in, Object.keys(), Object.values(), or Object.entries()

const movie = {title: 'Purple Hearts', filmDirector: ' Elizabeth Allen Rosenbaum', year:2022 };
for (const key in movie){
    if(movie.hasOwnProperty(key)){
        console.log(`${key} : ${movie[key]}` );
    }
}

Object.entries(movie).map(entry => {
    let key = entry[0];
    let value = entry[1];
    console.log(key, value);
});

//deep copy
const movieList =  ['Game of Thrones', 'Suits', 'Bridgertones'];
const movieListDeepCopy = JSON.parse(JSON.stringify(movieList));
console.log( movieListDeepCopy);
//movieListDeepCopy[1].list = ['Elite', 'Suits','Bridgertones'] even if we change the deepcopy, the list will not change in the movieList
//console.log(movieList);

//1.5
//accesor-indexOf, concat(), join(), slice()

let serial = ['Game of Thrones', 'Suits', 'Bridgertones'];
let serial2 = ['Elite', 'Good Doctor'];
let serial3 = serial.concat(serial2);//concat
let serial4 = serial.join();//join
let serial5  = serial.slice(1,3);// slice
console.log(serial.indexOf('Suits')); //indexOf
console.log(serial3);//res concat
console.log(serial4)//res join
console.log(serial5)//res slice

//Mutator-push(in the begining), isArray, pop, shift, etc

let fruits = ['banana', 'orange', 'peach', 'kiwi'];
console.log(Array.isArray(fruits));
console.log(fruits.pop());
console.log(fruits.shift());

//1.6
//call back- this function is passed as an argument to another function
const welcome = (name, callback) =>{
    console.log(`Hello, ${name}!`); 
    callback(name);
  }
  
  const goodbye = (name) => {
    console.log(`Goodbye, ${name}!`);
  }
  
  welcome('Vlada', goodbye);
//promise is an object representing the eventual completion (or failure) of an asynchronous operation.
function fetchedData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
  }
  
  fetchedData()
    .then((data) => {
      console.log( data);  // Success handler
    })
    .catch((error) => {
      console.error( error);  // Error handler
    });

//1.7 async makes a function return a Promise, await makes a function wait for a Promise
function fetchedData2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
  }
async function getData() {
    const result = await fetchedData2();  // Waits for fetchData() to resolve
    console.log(result);
}
  getData();

//1.8 Closures  gives a function access to its outer scope
function studFunc() {
    const name = "Ciubuc";
    function displayName() { //the inner function, that forms a closure
      console.log(name);
    }
    return displayName;
  }
  
  const mystudFunc = studFunc();
  mystudFunc();

//1.9 useState. useRef.
//useState allows you to add a state to functional components. It allows you to add state to your components, making them dynamic and interactive.
//State Management: useState helps manage state within a component.
//Re-renders on Change: The component re-renders when the state changes.
//Batched Updates: React batches multiple state updates for performance.
//syntax 
//const [state, setState] = useState(initialValue);

//useRef primarily used for accessing and manipulating DOM elements directly. It persists values between renders without causing re-renders. The useRef hook returns a mutable ref object. 
//DOM Reference: Provides a way to reference and interact with DOM elements.
//No Re-renders on Change: Changing the ref value does not trigger a re-render.
//Persistent Values: Keeps the same object reference between renders.
//syntax 
//const myRef = useRef(initialValue);



