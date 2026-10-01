import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Initial list:");
console.log(list.toString());

console.log("\nSize:");
console.log(list.size());

console.log("\nHead:");
console.log(list.head());

console.log("\nTail:");
console.log(list.tail());

console.log("\nValue at index 2:");
console.log(list.at(2));

console.log("\nContains hamster:");
console.log(list.contains("hamster"));

console.log("\nIndex of snake:");
console.log(list.findIndex("snake"));

list.prepend("rabbit");

console.log("\nAfter prepend:");
console.log(list.toString());

console.log("\nPopped value:");
console.log(list.pop());

console.log("\nAfter pop:");
console.log(list.toString());

list.insertAt(2, "lion", "tiger");

console.log("\nAfter insertAt:");
console.log(list.toString());

list.removeAt(3);

console.log("\nAfter removeAt:");
console.log(list.toString());