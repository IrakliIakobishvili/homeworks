//  LinkedList
  
//   Name your class / constructor (something you can call new on) LinkedList
  
//   LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
//   the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
//   keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
//   same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
//   consumer of the data structure.
  
//   I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
//   has two properties, value and next.
  
//   length - integer  - How many elements in the list
//   push   - function - accepts a value and adds to the end of the list
//   pop    - function - removes the last value in the list and returns it
//   get    - function - accepts an index and returns the value at that position
//   delete - function - accepts an index, removes value from list, collapses, 
//                       and returns removed value


class Node{
     constructor(data, next = null){
         this.data = data,
         this.next = next
     }
 }

 class LinkedList{
     constructor(){
         this.head = null;
         this.length = 0;
     }
 }

let list = new LinkedList();


 LinkedList.prototype.get = function(index){
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
               return node;
            }
            counter++;
            node = node.next;
        }
        return null;
}

LinkedList.prototype.pop = function(){
    if(!this.head){
        return null;
    }
    if(!this.head.next){
        this.head = null;
        return;
    }
   let previous = this.head;
   let tail = this.head.next;
   
   while(tail.next !== null){
       previous = tail;
       tail = tail.next;
   }
   
   previous.next = null;
   return this.head;
}


LinkedList.prototype.push = function(data){    
    let newNode = new Node(data);
    if(!this.head){
        this.head = newNode;
        return this.head;
    }
   let tail = this.head;
   while(tail.next !== null){
        tail = tail.next;
   }
   tail.next = newNode;
   return this.head;
}

LinkedList.prototype.delete = function(index){
    if (!this.head) {
         this.head = new Node(data);
         return;
     }
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    const previous = this.get(index - 1);
    
    if (!previous || !previous.next) {
        return;
    }
    
    previous.next = previous.next.next;     
    return this.head
}


// list.delete(0)
// list.pop()
// console.log(list.push('node_1'))
