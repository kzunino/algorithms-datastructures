class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  toString() {
    let head = this.head;
    let result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result.join(', ');
  }

  removeDuplicates() {
    if (!this.head) return undefined;
    if (this.length === 1) return this;

    let i = this.head;
    let j = i.next;
    let hash = {};
    hash[i.val] = true;

    while (j) {
      let value = j.val;
      if (hash[value]) {
        i.next = j.next;
        this.length--;
      } else {
        hash[value] = true;
        i = j;
      }

      j = j.next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(2);
list.push(3);
list.push(1);
list.push(4);
// console.log(list);

console.log(list.removeDuplicates());
console.log(list.toString());
