class minHeap {
  constructor() {
    this.len = 0;
    this.heap = [];
  }

  getHeap() {
    return this.heap;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.len;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.len;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1]
    ];
  }

  removeMin() {
    if (this.len === 0) throw new Error("Empty heap");
    let min = this.heap[0];
    console.log("here is the heap", this.heap);
    this.heap[0] = this.heap[this.len - 1];
    this.len--;
    this.heapifyDown(0);
    return min;
  }

  add(data) {
    this.heap[this.len] = data;
    this.len++;
    this.heapifyUp(this.len - 1);
  }

  heapifyDown(index) {
    let smallest = index;
    if (this.hasLeftChild(index) && this.heap[smallest] > this.leftChild(index))
      smallest = this.getLeftChildIndex(index);
    if (
      this.hasRightChild(index) &&
      this.heap[smallest] > this.rightChild(index)
    )
      smallest = this.getRightChildIndex(index);
    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapifyDown(smallest);
    }
  }

  heapifyUp(index) {
    if (this.hasParent(index) && this.heap[index] < this.parent(index)) {
      this.swap(index, this.getParentIndex(index));
      this.heapifyUp(this.getParentIndex(index));
    }
  }
}

let minHeap1 = new minHeap();

console.log("The min heap is", minHeap1.getHeap());
minHeap1.add(15);
console.log("The min heap is", minHeap1.getHeap());
minHeap1.add(25);
console.log("The min heap is", minHeap1.getHeap());
minHeap1.add(-99);
console.log("The min heap is", minHeap1.getHeap());
minHeap1.add(3);
console.log("The min heap is", minHeap1.getHeap());
minHeap1.add(22);
console.log("The min heap is", minHeap1.getHeap());
minHeap1.add(99);

console.log("The min heap is", minHeap1.getHeap());

console.log("The min heap is", minHeap1.getHeap());
console.log("The min heap is", minHeap1.getHeap());

minHeap1.add(-3);
console.log("The min heap is", minHeap1.getHeap());
minHeap1.add(-22);
console.log("The min heap is", minHeap1.getHeap());

console.log("The min heap is", minHeap1.getHeap());
console.log(
  minHeap1.removeMin(),
  minHeap1.removeMin(),
  minHeap1.removeMin(),
  minHeap1.removeMin(),
  minHeap1.removeMin(),
  minHeap1.removeMin(),
  minHeap1.removeMin(),
  minHeap1.removeMin()
);
