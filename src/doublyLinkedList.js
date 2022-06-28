class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Dll {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  insert(data, index) {
    if (index < 0 || index > this.len) return null;
    let node = new Node(data);

    if (index === 0) {
      if (this.head === null) {
        this.head = node;
        this.tail = this.head;
      } else {
        this.head.prev = node;
        node.next = this.head;
        node.prev = null;
        this.head = node;
      }
    }
    if (index === this.len) {
      this.tail.next = node;
      node.prev = this.tail;
      node.next = null;
      this.tail = node;
    } else {
      node.next = this.next;
      this.next.prev = node;
      node.prev = this;
      this.next = node;
    }
    this.len++;
    return this.head;
  }

  remove(index) {
    if (index < 0 || index > this.len) return;

    if (index === 0) {
      if (this.head.next === null) {
        this.len = 0;
        this.head = null;
        this.tail = null;
      } else {
        this.len--;
        this.next.prev = null;

        this.head.next = null;
        this.head = this.next;
      }
    } else if (index === this.len - 1) {
      this.tail = this.prev;
      this.prev.next = null;
      this.len--;
    } else {
      this.next.prev = this.prev;
      this.prev.next = this.next;
      this.len--;
    }
    return this.head;
  }

  getValue(index) {
    if (index < 0 || index > this.len) return null;
    let i = 0;
    let dummy = this.head;
    while (i <= index) {
      this.dummy = this.dummy.next;
    }
    return this.dummy.value;
  }
}

const dll = new Dll();

console.log("The Dll is", dll);

console.log(
  "After insertion",
  dll.insert(5, 0),
  dll.head.prev,
  dll.len,
  dll.insert(7, 1),
  dll.insert(8, 2),
  dll
);
console.log("After removal", dll.remove(1));
