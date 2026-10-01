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

describe("pop", () => {
  test("returns undefined when the list is empty", () => {
    const list = new LinkedList();

    expect(list.pop()).toBeUndefined();
  });

  test("removes and returns the only node in the list", () => {
    const list = new LinkedList();

    list.append("dog");

    expect(list.pop()).toBe("dog");
    expect(list.head()).toBeUndefined();
    expect(list.size()).toBe(0);
  });

  test("removes the head node and returns its value", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.pop()).toBe("dog");
    expect(list.head()).toBe("cat");
    expect(list.size()).toBe(2);
  });
});

describe("contains", () => {
  test("returns true when the value exists in the list", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.contains("cat")).toBe(true);
  });

  test("returns false when the value does not exist", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.contains("snake")).toBe(false);
  });

  test("returns false for an empty list", () => {
    const list = new LinkedList();

    expect(list.contains("dog")).toBe(false);
  });
});

describe("findIndex", () => {
  test("returns the index of the matching value", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.findIndex("dog")).toBe(0);
    expect(list.findIndex("cat")).toBe(1);
    expect(list.findIndex("parrot")).toBe(2);
  });

  test("returns -1 when the value is not found", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");

    expect(list.findIndex("snake")).toBe(-1);
  });

  test("returns the index of the first matching value", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("dog");

    expect(list.findIndex("dog")).toBe(0);
  });
});

describe("toString", () => {
  test("returns an empty string for an empty list", () => {
    const list = new LinkedList();

    expect(list.toString()).toBe("");
  });

  test("returns the list as a formatted string", () => {
    const list = new LinkedList();

    list.append("dog");
    list.append("cat");
    list.append("parrot");

    expect(list.toString()).toBe(
      "( dog ) -> ( cat ) -> ( parrot ) -> null",
    );
  });

  test("works with a single node", () => {
    const list = new LinkedList();

    list.append("dog");

    expect(list.toString()).toBe("( dog ) -> null");
  });
});

describe("insertAt", () => {
  test("inserts a value at the given index", () => {
    const list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    list.insertAt(1, 10);

    expect(list.toString()).toBe(
      "( 1 ) -> ( 10 ) -> ( 2 ) -> ( 3 ) -> null",
    );
  });
});

test("inserts multiple values while preserving their order", () => {
  const list = new LinkedList();

  list.append(1);
  list.append(2);
  list.append(3);

  list.insertAt(1, 10, 11);

  expect(list.toString()).toBe(
    "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null",
  );
});

test("inserts values at the beginning of the list", () => {
  const list = new LinkedList();

  list.append(1);
  list.append(2);

  list.insertAt(0, 10, 11);

  expect(list.toString()).toBe(
    "( 10 ) -> ( 11 ) -> ( 1 ) -> ( 2 ) -> null",
  );
});

test("inserts values at the end of the list", () => {
  const list = new LinkedList();

  list.append(1);
  list.append(2);
  list.append(3);

  list.insertAt(3, 4, 5);

  expect(list.toString()).toBe(
    "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> null",
  );
});

test("inserts into an empty list at index 0", () => {
  const list = new LinkedList();

  list.insertAt(0, "dog");

  expect(list.toString()).toBe("( dog ) -> null");
});

test("throws RangeError when the index is below 0", () => {
  const list = new LinkedList();

  expect(() => list.insertAt(-1, "dog")).toThrow(RangeError);
});

test("throws RangeError when the index is greater than the list size", () => {
  const list = new LinkedList();

  list.append("dog");
  list.append("cat");

  expect(() => list.insertAt(3, "parrot")).toThrow(RangeError);
});
