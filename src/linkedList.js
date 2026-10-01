class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
  const newNode = new Node(value, this.headNode);

  this.headNode = newNode;
  }

  size() {
  let count = 0;
  let current = this.headNode;

  while (current !== null) {
    count += 1;
    current = current.nextNode;
  }

  return count;
  }
}

export { LinkedList, Node };