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

  toString() {
  if (this.headNode === null) {
    return "";
  }

  let result = "";
  let current = this.headNode;

  while (current !== null) {
    result += `( ${current.value} ) -> `;
    current = current.nextNode;
  }

  return `${result}null`;
  }

  insertAt(index, ...values) {
  const listSize = this.size();

  if (index < 0 || index > listSize) {
    throw new RangeError("Index out of bounds");
  }

  if (values.length === 0) {
    return;
  }

  const firstNewNode = new Node(values[0]);
  let lastNewNode = firstNewNode;

  for (let i = 1; i < values.length; i += 1) {
    lastNewNode.nextNode = new Node(values[i]);
    lastNewNode = lastNewNode.nextNode;
  }

  if (index === 0) {
    lastNewNode.nextNode = this.headNode;
    this.headNode = firstNewNode;
    return;
  }

  let previous = this.headNode;

  for (let i = 0; i < index - 1; i += 1) {
    previous = previous.nextNode;
  }

  lastNewNode.nextNode = previous.nextNode;
  previous.nextNode = firstNewNode;
  }
}

export { LinkedList, Node };