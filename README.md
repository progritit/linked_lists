# Linked Lists

A singly linked list implementation built with JavaScript as part of my progression through **The Odin Project**.

The project focuses on understanding how linked data structures work internally: nodes, references, traversal, insertion, removal, and the manipulation of links between nodes.

It was developed incrementally using automated tests and a RED → GREEN → refactor workflow.

## Overview

Unlike an array, a linked list does not store its elements in indexed positions.

Each node stores:

- a `value`
- a reference to the next node through `nextNode`

The list itself keeps a reference to its first node.

```text
head
 │
 ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│  dog    │ ──► │  cat    │ ──► │ parrot  │ ──► null
└─────────┘     └─────────┘     └─────────┘
```

Accessing later elements therefore requires traversing the chain from the beginning.

## Classes

### `Node`

Represents an individual node in the list.

Each node contains:

```js
value
nextNode
```

Both default to `null`.

### `LinkedList`

Represents the full linked list and stores a reference to its head node.

## Methods

| Method | Description | Complexity |
| --- | --- | --- |
| `append(value)` | Adds a node to the end of the list | O(n) |
| `prepend(value)` | Adds a node to the beginning | O(1) |
| `size()` | Returns the number of nodes | O(n) |
| `head()` | Returns the first value | O(1) |
| `tail()` | Returns the final value | O(n) |
| `at(index)` | Returns the value at an index | O(n) |
| `pop()` | Removes and returns the head value | O(1) |
| `contains(value)` | Checks whether a value exists | O(n) |
| `findIndex(value)` | Returns the first matching index | O(n) |
| `toString()` | Returns a formatted representation of the list | O(n) |
| `insertAt(index, ...values)` | Inserts one or more values at an index | O(n + k) |
| `removeAt(index)` | Removes the node at an index | O(n) |

`k` represents the number of values being inserted.

## Example

```js
import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
```

Output:

```text
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

Additional operations:

```js
list.prepend("rabbit");

console.log(list.head());
// rabbit

console.log(list.tail());
// turtle

console.log(list.at(2));
// cat

console.log(list.contains("parrot"));
// true

console.log(list.findIndex("hamster"));
// 4

console.log(list.pop());
// rabbit
```

## Insertion and removal

The extra-credit methods demonstrate one of the most important concepts behind linked lists: modifying references between existing nodes.

For example:

```text
1 ──► 2 ──► 3
```

Calling:

```js
list.insertAt(1, 10, 11);
```

rewires the chain into:

```text
1 ──► 10 ──► 11 ──► 2 ──► 3
```

Likewise, removing a node means making the previous node point directly to the following node.

```text
dog ──► cat ──► parrot
```

After:

```js
list.removeAt(1);
```

the list becomes:

```text
dog ──────────► parrot
```

## Testing

The project uses **Jest** for automated testing.

Tests cover:

- node creation
- empty lists
- single-node lists
- traversal
- insertion at the head, middle, and tail
- removal at the head, middle, and tail
- invalid indices
- duplicate values
- return values
- mutations to the list structure
- string representation

Run the complete test suite with:

```bash
npm test
```

Run tests continuously while developing:

```bash
npm run test:watch
```

## Quality and security

The project uses the development architecture from my JavaScript quality/testing starter:

- **Webpack** — build tooling
- **ESLint** — static analysis
- **Prettier** — formatting
- **Jest** — automated testing
- **Babel** — ES module support in Jest
- **Semgrep** — static security analysis
- **npm audit** — dependency security checks

Run the complete verification pipeline with:

```bash
npm run check:all
```

This runs the project's linting, formatting, production build, static security analysis, and dependency audit checks.

## Project structure

```text
linked_lists/
├── src/
│   ├── linkedList.js
│   └── main.js
├── tests/
│   └── linkedList.test.js
├── babel.config.js
├── eslint.config.js
├── package.json
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── README.md
```

## What I learned

The most important concept reinforced by this project was that linked-list operations are primarily about **references**, rather than moving values around.

Traversal follows the same recurring pattern:

```js
let current = this.headNode;

while (current !== null) {
  // work with current
  current = current.nextNode;
}
```

Insertion and removal build upon that idea by changing which node a `nextNode` reference points to.

The project also reinforced:

- singly linked list fundamentals
- traversal algorithms
- reference manipulation
- edge-case handling
- time-complexity reasoning
- class-based data structures
- rest parameters
- error handling with `RangeError`
- test-driven development
- automated quality and security checks

## Development

Install dependencies:

```bash
npm install
```

Run the manual demonstration:

```bash
node src/main.js
```

Run tests:

```bash
npm test
```

Run the complete project verification:

```bash
npm run check:all
```

## License

This project is licensed under the MIT License.