class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  preprend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      // Example
      // Node { value: 40, next: null }
      // Node { value: 40, next: Node { value: 50, next: null } }
      // Node { value: 50, next: null }
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("Invalid request as the list is empty");
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      console.log("Invalid request as the list is empty");
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = this.tail = node;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let listValue = ` `;
      while (curr) {
        listValue += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();
list.preprend(10);
list.preprend(20);
list.preprend(30);
list.print();
list.append(40);
list.append(50);
list.print();
list.removeFromEnd();
list.print();
list.removeFromFront();
list.print();
