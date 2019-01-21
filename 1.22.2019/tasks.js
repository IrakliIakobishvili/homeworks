// Challenge 1
// Write code that will log to the console, 'I am at the beginning of the code'.
// Beneath that console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout callback function' after 3 seconds (3000 ms)
// Next, add code to the end of the challenge to log 'I am at the end of the code'. Now re-run the code.
// Make sure the 'console' and 'output' panes are showing (click the tabs above if not) and then run your code with the 'Run with JS' button.
// Clear the console. Change the delay time in the time from 3000 ms to 0. Think hard about how the order should change and then run the code again.

function info() {
  console.log('I am at the beginning of the code');
  setTimeout(function(){
    console.log('I am in the setTimeout callback function');
    callBack();
  },3000);
  function callBack() {
    console.log('I am at the end of the code');
  }
}
// info();

// Challenge 2
// Write code that will log to the console "Interval Hello!" every 2 seconds (see setInterval). Use the given clearAllIntervals function to clear all the messages when you have this functionality working.
// Next, modify your code so that the "Interval Hello!" messages will automatically stop after 10 seconds.
// Then, modify your code again so that the "Interval Hello!" messages will automatically stop after 10 seconds without use of the clearAllIntervals function, and using clearInterval only once. Perform research if you are unsure how to do this.

function introduction() {
  let i = 1;
  let interval = setInterval(function(){
    console.log('Interval Hello! '+i);
    (i == 10) ? clearInterval(interval) : i++;
  },1000);
}
// introduction();


// Challenge 3
// Write a function everyXsecsForYsecs that will accept three arguments: a function, an interval time in seconds, and a total time in seconds. everyXsecsForYsecs should invoke the given function every X times 1000 milliseconds, but then stop invoking the function after Y times 1000 milliseconds.
// Write function sayHowdy that will log "Howdy" to the console. Then test your everyXsecsForYsecs function by using it to invoke sayHowdy every 1 second for 5 seconds.
// Now, modify your everyXsecsForYsecs function so it does not use setInterval, but still keeps the same functionality.

function welcome() {
  console.log('Hello');
}
function everyXsecsForYsecs(fun,time,totalTime) {
  let interval = setInterval(function(){
    fun();
  },time);
  
  let i = 1000;
  let calculateTime = setInterval(function(){
    (i == totalTime) ? (clearInterval(interval),clearInterval(calculateTime)) : i += 1000;
  },1000);
}
// everyXsecsForYsecs(welcome,1000,10000);

function everyXsecsForYsecs(fun,time,totalTime) {
  let i = 1000;
   function subFun() {
     let timeout = setTimeout(function(){
     (i == totalTime) ? clearTimeout(timeout) : (subFun(), (i += 1000));
     fun();
   	},time); 
   }  
  subFun();
}
// everyXsecsForYsecs(welcome,1000,10000);


// Challenge 4
// Recreate the built in array method, forEach: Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.
// Create a variable named delays and assign to it an array with the numbers 2000, 5000, 0, and 3500 (in that order).
// Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).
// Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.

function cb(array) {
  for(let i = 0; i < array.length; i++) {
		console.log(i+' '+array[i]);
	}
}
function forEach(array,callBack) {
  callBack(array);
}
// forEach(['one','two','three'],cb);


let delays = [2000,5000,0,3500];
function delayLog(delayTime,index) {
  for(let i = 0; i < delayTime.length; i++) {
    setTimeout(function(){
      console.log(i+' '+delayTime[i]);
    },delayTime[i]);
  }
}
// delayLog(delays);