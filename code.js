// Stack constructor using an array
function Stack() {
    this.items = [];
  }

  /***********Stack constructor PART EXPLAINATION************/
/*

1. function Stack(): This line defines a function named Stack. In JavaScript, when a function's name begins with a capital letter (like "Stack" here), it's typically used as a constructor function. Constructor functions are used to create instances of objects with specific properties and methods.

SEE SCREENSHOT: https://prnt.sc/glvvawu5zkau

2. this.items = []: Within the Stack constructor function, this.items is used to create a property called "items" for each new stack instance. The items property is initialized as an empty array [].

SEE SCREENSHOT: https://prnt.sc/k2lCyOxJzVC_

*/    
  
  // Push an element onto the stack
  Stack.prototype.push = function(element) {
    this.items.push(element);
  }

  /***********push method PART EXPLAINATION************/
/*

1. Stack.prototype.push is defining a method called push for the Stack class. This method allows you to add (or "push") an element onto the stack.

SEE SCREENSHOT: https://prnt.sc/vybzcdAiHzDD

2. The function(element) part indicates that the push method expects an element as a parameter. This is the element you want to add to the stack.

SEE SCREENSHOT: https://prnt.sc/RWvV7vhckKP8

3. this.items.push(element) is the actual code that adds the element to the stack. this.items refers to the array that stores the elements in the stack, and push(element) is an array method that appends element to the end of the array.

SEE SCREENSHOT: https://prnt.sc/4CuvDUdVh2b6

*/     
  
  // Pop the top element from the stack and return it
  Stack.prototype.pop = function() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  /***********pop method PART EXPLAINATION************/
/*

1. Stack.prototype.pop = function() { - This line is defining a method named pop for the Stack class. It's adding this method to the prototype of the Stack class, which means that all instances of the Stack class will have access to this method.

SEE SCREENSHOT: 

2. if (this.isEmpty()) { - Here, it's checking if the stack is empty by calling the isEmpty method. If the stack is indeed empty, it enters the if block.

SEE SCREENSHOT:

3. return "Stack is empty"; - If the stack is empty, this line returns the string "Stack is empty" to indicate that the pop operation cannot be performed because the stack is empty.

SEE SCREENSHOT:

4. return this.items.pop(); - If the stack is not empty, it proceeds to this line. Here, it uses the pop() method of the items array, which represents the stack, to remove and return the top element of the stack. The pop() method both removes the element and returns it. So, this line effectively pops the top element from the stack and returns it.

SEE SCREENSHOT:

*/   
  
  // Helper function to check if the stack is empty
  Stack.prototype.isEmpty = function() {
    return this.items.length === 0;
  }
  
  // Usage example:
  const stack = new Stack();
  stack.push(1); // Push 1 onto the stack
  stack.push(2); // Push 2 onto the stack
  console.log(stack.pop()); // Pop and print 2
  console.log(stack.pop()); // Pop and print 1
  console.log(stack.pop()); // Stack is empty
  

    