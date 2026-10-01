import { LinkedList, Node } from "../src/linkedList.js";

describe("Node", () => {
  test("creates a node with null values by default", () => {
    const node = new Node();

    expect(node.value).toBeNull();
    expect(node.nextNode).toBeNull();
  });

  test("creates a node with a given value", () => {
    const node = new Node("dog");

    expect(node.value).toBe("dog");
    expect(node.nextNode).toBeNull();
  });
});

describe("LinkedList", () => {
  describe("append", () => {
    test("adds a node to an empty list", () => {
      const list = new LinkedList();

      list.append("dog");

      expect(list.headNode.value).toBe("dog");
      expect(list.headNode.nextNode).toBeNull();
    });

    test("adds nodes to the end of the list", () => {
      const list = new LinkedList();

      list.append("dog");
      list.append("cat");

      expect(list.headNode.value).toBe("dog");
      expect(list.headNode.nextNode.value).toBe("cat");
      expect(list.headNode.nextNode.nextNode).toBeNull();
    });
  });
});

describe("prepend", () => {
  test("adds a node to the start of an empty list", () => {
    const list = new LinkedList();

    list.prepend("dog");

    expect(list.headNode.value).toBe("dog");
    expect(list.headNode.nextNode).toBeNull();
  });

  test("adds a node to the start of a non-empty list", () => {
    const list = new LinkedList();

    list.append("cat");
    list.prepend("dog");

    expect(list.headNode.value).toBe("dog");
    expect(list.headNode.nextNode.value).toBe("cat");
  });
});

describe("size", () => {
  test("returns 0 for an empty list", () => {
    const list = new LinkedList();

    expect(list.size()).toBe(0);
  });

  test("returns the number of nodes in the list", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.size()).toBe(3);
  });
});

describe("head", () => {
  test("returns undefined for an empty list", () => {
    const list = new LinkedList();

    expect(list.head()).toBeUndefined();
  });

  test("returns the value of the first node", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.head()).toBe("dog");
  });
});

describe("tail", () => {
  test("returns undefined for an empty list", () => {
    const list = new LinkedList();

    expect(list.tail()).toBeUndefined();
  });

  test("returns the value of the final node", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.tail()).toBe("parrot");
  });
});

describe("at", () => {
  test("returns the value at the given index", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.at(0)).toBe("dog");
    expect(list.at(1)).toBe("cat");
    expect(list.at(2)).toBe("parrot");
  });

  test("returns undefined when the index is out of bounds", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.at(2)).toBeUndefined();
    expect(list.at(10)).toBeUndefined();
  });

  test("returns undefined for a negative index", () => {
    const list = new LinkedList();

    list.append("dog");

    expect(list.at(-1)).toBeUndefined();
  });
});