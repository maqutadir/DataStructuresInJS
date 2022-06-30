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
    if (
      index < 0 ||
      index > this.len ||
      data === undefined ||
      index === undefined
    )
      throw new Error("Undefined or out of bounds index or undefined data");
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
      let i = 0;
      let dummy = this.head;
      while (i < index) {
        dummy = dummy.next;
        i += 1;
      }
      dummy.next.prev = node;
      node.next = dummy.next;
      node.prev = dummy;
      dummy.next = node;
    }
    this.len++;
    return this.head;
  }

  //remove node instead of index
  remove(index) {
    if (index < 0 || index > this.len || index === undefined) return;

    if (index === 0) {
      if (this.head.next === null) {
        this.len = 0;
        this.head = null;
        this.tail = null;
      } else {
        console.log("this is", this);
        this.head = this.head.next;
        this.head.prev = null;
        this.len--;
      }
    } else if (index === this.len - 1) {
      this.tail = this.prev;
      this.prev.next = null;
      this.len--;
    } else {
      let dummy = this.head;
      let i = 0;
      while (i < index) {
        dummy = dummy.next;
        i++;
      }
      dummy.next.prev = dummy.prev;
      dummy.prev.next = dummy.next;
      this.len--;
    }
    return this.head;
  }

  getValue(index) {
    if (index < 0 || index > this.len || index === undefined) return null;
    let i = 0;
    let dummy = this.head;
    while (i < index) {
      dummy = dummy.next;
    }
    return dummy.value;
  }
}

const dll = new Dll();

console.log("The Dll is", dll);

console.log(
  "After insertion",
  dll.insert(5, 0),
  dll.insert(7, 1),
  dll.insert(8, 2),
  dll.insert(15, 3),
  dll.insert(9, 2)
  //dll.insert(23, 8)
);
console.log("After removal", dll.remove(3), dll.remove(0), dll.remove(15));
console.log("The Dll is", dll);
console.log("Get value of: ", dll.getValue(0));
