// ArrayList
  
//   We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
//   going to implement an array using objects. You should not use arrays at all in this exercise, just
//   objects. Make a class (or constructor function; something you can call new on) called ArrayList.
//   ArrayList should have the following properties (in addition to whatever properties you create):
  
//   length - integer  - How many elements in the array
//   push   - function - accepts a value and adds to the end of the list
//   pop    - function - removes the last value in the list and returns it
//   get    - function - accepts an index and returns the value at that position
//   delete - function - accepts an index, removes value from list, collapses, 
//                       and returns removed value


class ArrayList {
  constructor() {}
}
let myArray = new ArrayList();

ArrayList.prototype.push = function(val) {
  let length = -1;
  for(key in this) {
    if(this.hasOwnProperty(key)) {
      length++;
    }
  }
  this[length+1] = val;
  return this;
}

ArrayList.prototype.pop = function() {
  let lastKey = '';
  for(key in this) {
    if(this.hasOwnProperty(key)) {
      lastKey = key;
    }
  }
  delete this[lastKey];
  return this;
}

ArrayList.prototype.length = function() {
  let totalKey = 0;
  for(key in this) {
    if(this.hasOwnProperty(key)) {
      totalKey++;
    }
  }
  return totalKey;
}

ArrayList.prototype.get = function(index) {
  if(this.hasOwnProperty(index)) {
    return this[index];
  }
}

ArrayList.prototype.delete = function(index) {
  let i = 0;
  let values = {};
  delete this[index];
  for(let i = 0; i <= this.length(); i++) {
    if(this[i]) {
      values[i] = this[i];
    }else {
      values[i] = this[i+1];
      i++;
    } 
  }
  for(key in this) {
    delete this[key];
  }
  for(key in values) {
    if(values[key]) {
     this[i] = values[key];
    i++; 
    }
  }
return this;
}

console.log(myArray)
// myArray.push('one');
// console.log(myArray.pop())
// console.log(myArray.length())
// console.log(myArray.get(3))
// console.log(myArray.delete(2))












