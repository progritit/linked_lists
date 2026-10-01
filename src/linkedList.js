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

  head() {
  return this.headNode?.value;
  }

  tail() {
  if (this.headNode === null) {
    return undefined;
  }

  let current = this.headNode;

  while (current.nextNode !== null) {
    current = current.nextNode;
  }

  return current.value;
  }

  at(index) {
  if (index < 0) {
    return undefined;
  }

  let current = this.headNode;
  let currentIndex = 0;

  while (current !== null) {
    if (currentIndex === index) {
      return current.value;
    }

    current = current.nextNode;
    currentIndex += 1;
  }

  return undefined;
  }
}

export { LinkedList, Node };