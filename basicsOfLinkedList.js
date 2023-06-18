class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //prepend method has O(1) time complexity
  prepend(value) {
    const node = new Node(value);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  //append method has O(n) time complexity
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index to insert");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid request");
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return null;
    } else {
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          const removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--;
          return value;
        }
        console.log("Value not found in the list");
        return null;
      }
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    console.log("Item not found");
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
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
console.log("is list empty?", list.isEmpty());
console.log("size of the list is", list.getSize());
list.print();
list.insert(10, 0);
list.print();
list.insert(20, 0);
list.insert(30, 0);
list.print();
list.insert(40, 2);
list.print();
// list.removeValue(40)
// list.print();
// console.log("size of the list is", list.getSize());
// list.removeValue(60)
// list.print();
// console.log("size of the list is", list.getSize());
// list.removeValue(10)
// list.print();
// console.log("size of the list is", list.getSize());
// console.log(list.search(20))
// console.log(list.search(40))
list.reverse();
list.print();
