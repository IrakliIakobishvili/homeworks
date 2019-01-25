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