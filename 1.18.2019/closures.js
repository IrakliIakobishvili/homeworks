// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
  function sub() {
    console.log('hello');
  }
  return sub;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1();


function createFunctionPrinter(input) {
  function sub() {
    console.log(input);
  }
  return sub;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();



function addByX(x) {
  function result(y) {
    return x + y;
  }
  return result;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1))

// now call addByTwo with an input of 2
console.log(addByTwo(2))


//--------------------------------------------------
// Extension
//--------------------------------------------------
function once(func) {
var answer = false; 
  function retFunc(x){
    return answer = (!answer) ? func(x) : answer;
  }
  return retFunc;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  let counter = 0;
  function sub(){
    counter++;
    let result = (counter < count) ? true : func();
    return result;
  }
  return sub;
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
   setTimeout(function(){
     console.log(func(3))
   },wait);
}
delay(addByTwo,1000)
