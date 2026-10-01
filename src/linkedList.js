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

  pop() {
  if (this.headNode === null) {
    return undefined;
  }

  const removedValue = this.headNode.value;

  this.headNode = this.headNode.nextNode;

  return removedValue;
  }

  contains(value) {
  let current = this.headNode;

  while (current !== null) {
    if (current.value === value) {
      return true;
    }

    current = current.nextNode;
  }

  return false;
  }

  findIndex(value) {
  let current = this.headNode;
  let index = 0;

  while (current !== null) {
    if (current.value === value) {
      return index;
    }

    current = current.nextNode;
    index += 1;
  }

  return -1;
  }
}

export { LinkedList, Node };