class Node {
    constructor(data) {
        // 1st sample Constructor: Initializes a new node with the given data
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // 2nd sample Constructor: Initializes an empty linked list
        this.head = null;
    }

/***********CONSTRUCTOR PART EXPLAINATION************/
/*

The above^ code defines two classes: Node and LinkedList.

1. Node Class:

The Node class represents an individual node in a singly linked list. Each node has two properties:

1ST PROPERTY(each constructor property is defined w/ a dot('.')) => .data =  This property stores the actual data or value that the node holds.
2ND PROPERTY(each constructor property is defined w/ a dot('.')) => .next = This property is a reference to the next node in the linked list. Initially, it's set to 'null' because when a node is created, it doesn't have a next node yet.

2. LinkedList Class:

The LinkedList class represents the linked list itself. It has one property:

PROPERTY(the constructor property is defined w/ a dot('.')) => .head = This property is a reference to the first node (the head) of the linked list. Initially, it's set to 'null' because when you create an empty linked list, there are no nodes in it.

SHORTEN EXPLANATION for the 2 classes:

The 'Node' class is used to create individual nodes with data and a reference to the next node, and the 'LinkedList' class is used to manage these nodes as a linked list, with the head property pointing to the first node.

*/  

    append(data) {
        // sample Append method: Adds a new node with the given data to the end of the list
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

/***********APPEND method PART EXPLAINATION************/
/*

1. 'append(data)' is a method used to add a new node with the provided data to the end (tail) of the linked list.

2. Inside the method, we first create a new node called 'newNode' using the 'Node' class constructor. This new node will hold the data we want to add to the linked list.

SEE SCREENSHOT: https://prnt.sc/tXRT22_IGlQh

3. Next, we check if the linked list is empty, which is indicated by the 'head' property being 'null'. If it's empty, we make the 'head' of the linked list point to the 'newNode'. This means that the new node becomes the first and only node in the list.

SEE SCREENSHOT: https://prnt.sc/Kh0uNRur9DVg

4. If the linked list is not empty, meaning there are already nodes in the list, we need to find the current last node (the one whose 'next' property is 'null') and make its 'next' property point to the 'newNode'. We do this by starting at the 'head' of the list and traversing it until we find the last node.

SEE SCREENSHOT: https://prnt.sc/hedoFdsv8QtC

🚶🏽‍♂️Here's the step-by-step process of the code block...

1️⃣ We start with current pointing to the head.
2️⃣ We enter a loop that continues as long as current has a next node (i.e., it's not the last node).
3️⃣ In each iteration of the loop, we move current to the next node by setting current equal to current.next. This effectively moves us one step closer to the end of the list.
4️⃣ When we reach the last node (i.e., current.next is null), we exit the loop.
🏆 Finally, we set the next property of the last node (which is now current) to point to the newNode, effectively adding it to the end of the list.

SHORTEN EXPLANATION of the append method:

In short, the append(data) method checks if the list is empty and adds the new node as the first node if it is. If the list is not empty, it traverses the list to find the last node and attaches the new node to it to maintain the order of nodes in the list. This ensures that the new data is added to the end of the linked list.

*/     

    pop() {
        // sample Pop method: Removes and returns the last node from the list
        if (!this.head) {
            return null;
        } else if (!this.head.next) {
            const popped = this.head;
            this.head = null;
            return popped;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            const popped = current.next;
            current.next = null;
            return popped;
        }
    }

/***********POP method PART EXPLAINATION************/
/*

1. First, the method checks if the linked list is empty by examining whether 'this.head' is 'null'. If it's empty, there's nothing to pop, so it returns 'null'.

SEE SCREENSHOT: https://prnt.sc/v3XLaQ-h5ASY

2. If there's only one node in the linked list (i.e., 'this.head.next' is 'null'), it means that this node is both the first and last node in the list. In this case, it stores a reference to this node in the 'popped' variable, sets 'this.head' to 'null' to make the list empty, and finally returns the 'popped' node.

SEE SCREENSHOT: https://prnt.sc/635SYAYHYae-

3. If there are more than one node in the linked list, it enters the 'else' block. It uses a 'while' loop to traverse the list to find the second-to-last node. The loop continues until 'current.next.next' is 'null', which means 'current' is pointing to the second-to-last node in the list.

SEE SCREENSHOT: https://prnt.sc/5JKF1KiVZktf

4. It then stores a reference to the last node in the 'popped' variable. To remove the last node from the list, it sets the next of the second-to-last node (pointed to by 'current') to 'null', effectively disconnecting it from the last node.

SEE SCREENSHOT: https://prnt.sc/eoaZ10P7H_lR

5. Finally, it returns the 'popped' node, which is the last node that was removed from the list.

SEE SCREENSHOT: https://prnt.sc/jK9X-Gw4xvcr

*/      

    prepend(data) {
        // sample Prepend method: Adds a new node with the given data to the beginning of the list
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

/***********PREPEND method PART EXPLAINATION************/
/*

1. 'prepend(data)' is a method of the 'LinkedList' class. It is used to add a new node with the provided 'data' to the beginning (or the "head") of the linked list.

SEE SCREENSHOT: https://prnt.sc/iJSn-OMTt_wv

2. 'const newNode = new Node(data);' creates a new node with the specified 'data'. This node will be the new head of the linked list.

SEE SCREENSHOT: https://prnt.sc/illHG4p0MJh-

3. 'newNode.next = this.head;' sets the 'next' property of the new node to point to the current head of the linked list. This is important because it connects the new node to the previous head.

SEE SCREENSHOT: https://prnt.sc/spDFYU6sloe4

4. 'this.head = newNode;' updates the 'head' of the linked list to be the new node. This effectively makes the new node the first element in the list, and the rest of the list follows it.

SEE SCREENSHOT: https://prnt.sc/oy-WU9grMj9U

🔑Illustration how prepend method works:

Before prepend is called:

List: 3 -> 7 -> 12
Head: 3

After calling prepend(1):

List: 1 -> 3 -> 7 -> 12
Head: 1

*/     

    popFirst() {
        // sample Pop First method: Removes and returns the first node from the list
        if (!this.head) {
            return null;
        }
        const popped = this.head;
        this.head = this.head.next;
        return popped;
    }

/***********popFirst method PART EXPLAINATION************/
/*

1. popFirst() is designed to remove and return the first node from the linked list. It's sometimes referred to as "shift" in the context of linked lists.

2. Implementation🧑🏽‍💻:

- The method starts by checking if the linked list is empty. If the head of the list is null, it means there are no nodes in the list. In this case, the method returns null to indicate that there's nothing to remove.
- If the list is not empty, it proceeds to remove the first node from the list.
- It does this by storing the current head node in a variable called popped. This node will be returned as the result.
- Next, the head is updated to point to the second node in the list, effectively removing the first node. This is done by assigning this.head to this.head.next.
- Finally, the method returns the popped node, which contains the data from the node that was removed.

3. SAMPLE:

🤔Imagine you have a linked list with nodes containing the values 1, 2, and 3. If you call popFirst() on this list, it will remove the node with the value 1 from the front of the list and return it. After this operation, the list will contain the nodes 2 and 3.

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

const removedNode = myList.popFirst();
// removedNode now contains the node with data 1
// myList now contains the nodes 2 and 3

*/ 

    get(index) {
        // sample Get method: Returns the data at the specified index
        if (index < 0) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) {
                current = current.next;
            } else {
                return null;
            }
        }
        return current ? current.data : null;
    }

/***********GET method PART EXPLAINATION************/
/*

1. get(index) {: This line defines the get method, which takes an index as its parameter. It's intended to retrieve the data at the specified index within the linked list.

SEE SCREENSHOT: https://prnt.sc/K5_krX9Ii-Fm

2. if (index < 0) { return null; }: This condition checks if the index is less than 0. In a zero-based index system, a negative index is invalid because there are no negative indices in an array or list. If the index is negative, the function returns null to indicate an invalid request.

SEE SCREENSHOT: https://prnt.sc/3N2hDqz_yn72

3. let current = this.head;: This line initializes a variable current and sets it to the head of the linked list. current is a pointer that starts at the head and will move through the list as we iterate.

SEE SCREENSHOT: https://prnt.sc/oHTkCuJhr-1b

4. for (let i = 0; i < index; i++) {: This is a for loop that iterates from 0 up to the specified index. It allows us to traverse the list and move the current pointer to the node at the desired index.

SEE SCREENSHOT: https://prnt.sc/Bt8pTCCT04FN

5. if (current) { current = current.next; } else { return null; }: Inside the loop, we check if current is not null. If it's not null, we move current to the next node in the list using current.next. If current is null at any point during the loop, it means that the specified index is out of bounds, so we return null to indicate that the requested index is not valid.

SEE SCREENSHOT: https://prnt.sc/JtCKOk0uFeA1

6. return current ? current.data : null;: After the loop, we check if current is not null. If it's not null, we return the dataof the node at the specified index. Ifcurrentisnull, this means the index was out of bounds, so we return null`.

SEE SCREENSHOT: https://prnt.sc/_14HLMMa3uuJ

SHORTEN EXPLANATION of the get method:

In short, the get(index) method is designed to retrieve the data at the specified index in the linked list while handling boundary cases such as negative indices and out-of-bounds indices. If the index is valid, it returns the data; otherwise, it returns null.

*/     

    set(index, data) {
        // sample Set method: Updates the data at the specified index with the new data
        if (index < 0) {
            return;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) {
                current = current.next;
            } else {
                return;
            }
        }
        if (current) {
            current.data = data;
        }
    }

/***********SET method PART EXPLAINATION************/
/*

1. Check if the provided index is a non-negative integer. If it's negative, we cannot update a node at a negative index, so we return early to indicate that the operation cannot be performed.

SEE SCREENSHOT: https://prnt.sc/GOkUjKewIWmU

2. Initialize a current variable to start at the head of the linked list. This variable will help us traverse the list to find the node at the specified index.

SEE SCREENSHOT: https://prnt.sc/GdxapAZcKL6q

3. Use a for loop to iterate through the list. The loop runs for index iterations, moving the current pointer one step at a time. This is done to reach the node at the desired index. If current becomes null before reaching the specified index, it means the index is out of bounds, so we return early.

SEE SCREENSHOT: https://prnt.sc/yeeoJVETfdjq

4. After the loop, current now points to the node at the specified index, or it's null if the index is out of bounds.

5. If current is not null, it means we've successfully reached the node at the specified index. At this point, we update the data property of that node with the new data provided as a parameter to the set method.

SEE SCREENSHOT: https://prnt.sc/mXR36fi64UCX

*/       

    insert(index, data) {
        // sample Insert method: Inserts a new node with the given data at the specified index
        if (index < 0) {
            return;
        }
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                if (current) {
                    current = current.next;
                } else {
                    return;
                }
            }
            if (current) {
                newNode.next = current.next;
                current.next = newNode;
            }
        }
    }

/***********INSERT method PART EXPLAINATION************/
/*

1. If the index is negative, it means the index is not valid. In this case, we simply return, indicating that we cannot insert a node at an invalid index.

SEE SCREENSHOT: https://prnt.sc/O5ch2hwmOyfA

2. We create a new node object called newNode with the data that you want to insert into the linked list.

SEE SCREENSHOT: https://prnt.sc/0yUNSTz2RXnP

3. If index is 0, it means we want to insert the new node at the very beginning of the linked list. In this case, we make the new node's next point to the current head of the linked list, effectively making it the new head, and then update the head to the newNode. This inserts the new node at the start of the list.

SEE SCREENSHOT: https://prnt.sc/5NawuSL-rbI2

4. If index is not 0, we need to find the node just before the desired index (index - 1). To do this, we start at the head of the linked list with a current variable.
We use a for loop that iterates index - 1 times, advancing the current pointer through the list until we reach the node just before the desired index.
If we reach the desired position (meaning current is not null), we update the newNode's next to point to the node currently at the desired index.
Then, we update the next of the current node to point to the newNode. This effectively inserts the newNode at the specified index in the list.

SEE SCREENSHOT: https://prnt.sc/ISP6fXrAEick

5. If the index is greater than the length of the list, or if it's negative, we do nothing, as it's not a valid index for insertion.

SHORTEN EXPLANATION of the insert method:

In short, the insert method allows you to add a new node with the given data at a specific position in the linked list, whether it's at the beginning (index 0) or anywhere else in the list. It performs boundary checks to ensure the index is valid and handles special cases for inserting at the beginning. 

*/     

    remove(data) {
        // sample Remove method: Removes the first node with the specified data from the list
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.next.data === data) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    }

/***********REMOVE method PART EXPLAINATION************/
/*

1. If the linked list is empty (the head is null), there's nothing to remove, so the method simply returns without making any changes.

SEE SCREENSHOT: https://prnt.sc/kqSZNXPTpLNA

2. If the data of the head node (the first node in the list) matches the data that needs to be removed, it means that the node to remove is the first node.
In this case, the head is updated to point to the next node, effectively removing the first node. The old head node is no longer part of the list.

SEE SCREENSHOT: https://prnt.sc/_ve9WUOijA9F

3. If the node to remove is not the head node, it means we need to traverse the list to find and remove it.
We start with a variable current pointing to the head of the list.
We use a while loop to iterate through the list as long as there is a next node (i.e., we haven't reached the end of the list).
Within the loop, we check if the data of the next node (i.e., current.next.data) matches the data we want to remove. If it does, we have found the node to remove.

SEE SCREENSHOT: https://prnt.sc/OnoF7EzLsaTz

4. To remove the node, we update the next pointer of the current node (current.next) to skip the node we want to remove. This effectively connects the current node directly to the node that comes after the one being removed, bypassing it.
After updating the next pointer, we exit the loop with the return statement since we have successfully removed the node.

SEE SCREENSHOT: https://prnt.sc/_uUG-NTiuj2l

*/      

    reverse() {
        // sample Reverse method: Reverses the order of nodes in the list
        let prev = null;
        let current = this.head;
        while (current) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
    }

/***********REVERSE method PART EXPLAINATION************/
/*

1. let prev = null; - This line initializes a variable prev to null. This variable will be used to keep track of the previously processed node while reversing the list.

SEE SCREENSHOT: https://prnt.sc/2dBKRcJB3mVa

2. let current = this.head; - Here, we initialize a variable current to the head of the linked list. This is the starting point for the reversal process.

SEE SCREENSHOT: https://prnt.sc/NCJ7Ng335N75

3. while (current) { - This is a while loop that iterates through the linked list. It continues as long as current is not null, meaning there are more nodes to process.

SEE SCREENSHOT: https://prnt.sc/4Lw8jxBNjn9U

4. const nextNode = current.next; - Inside the loop, we store the next node of the current node in the nextNode variable. This is done to prevent losing the reference to the rest of the list.

SEE SCREENSHOT: https://prnt.sc/023liam8zbou

5. current.next = prev; - This line changes the next pointer of the current node to point to the prev node. This effectively reverses the direction of the linked list. Initially, the next pointer of the current node points forward, but now it points backward to the prev node.

SEE SCREENSHOT: https://prnt.sc/s18GLd9U2FRc

6. prev = current; - The prev variable is updated to the current node because it will be the previous node for the next iteration.

SEE SCREENSHOT: https://prnt.sc/QlJpc_iUzvlo

7. current = nextNode; - current is updated to the next node, allowing the loop to continue processing the rest of the list.

SEE SCREENSHOT: https://prnt.sc/p6GbvK-OIJ_E

8. The loop continues until current becomes null, which means that we have reached the end of the original list.

9. Finally, after the loop, this.head is updated to prev. This is done to make the last node (which was the first node in the original list) the new head of the reversed list.

SEE SCREENSHOT: https://prnt.sc/oktTPilAybm-

*/      

}
