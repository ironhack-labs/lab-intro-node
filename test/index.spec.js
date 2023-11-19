// Require the file which will be tested
const SortedList = require("../index.js");

// Load the Assertion Library
const assert = require("assert");

describe("SortedList", () => {
  describe("Constructor", () => {
    it("should have items and length properties", () => {
      const list = new SortedList();
      assert.equal(list instanceof SortedList, true);
      assert.equal(list.length, 0);
      assert(Array.isArray(list.items));
    });
  });

  describe("#add(x)", () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });
    it("should add a single value to SortedList", () => {
      assert.equal(list.length, 0);
      list.add(1);
      assert.equal(list.length, 1);
    });
    it("should add a third value to SortedList", () => {
      list.add(30);
      list.add(20);
      list.add(10);
      assert.equal(list.items.length, 3);
    });

    it("should add a value while keeping the list sorted", () => {
      list.add(30);
      list.add(20);
      list.add(100);
      list.add(10);
      assert.equal(list.items[0], 10);
      assert.equal(list.items[1], 20);
      assert.equal(list.items[2], 30);
      assert.equal(list.items[3], 100);
    });
  });

  describe("#get(i)", () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
      for (let i = 0; i < 3; i++) {
        list.add(i);
      }
    });

    it("should return an OutOfBounds exception if there is no element in that position", () => {
      assert.throws(
        () => {
          list.get(4);
        },
        Error,
        "OutOfBounds"
      );
    });

    it("should return the element in that position", () => {
      assert.equal(list.get(2), 2);
    });
  });

  describe("#max()", () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it("should return an EmptySortedList exception if there are no elements in the list", () => {
      assert.throws(
        () => {
          list.max([]);
        },
        Error,
        "EmptySortedList"
      );
    });

    it("should return the max (highest) value in the list", () => {
      list.add(10);
      list.add(20);
      assert.equal(list.max(), 20);
    });
  });

  describe("#min()", () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it("should return an EmptySortedList exception if there is no elements in the list", () => {
      assert.throws(
        () => {
          list.min([]);
        },
        Error,
        "EmptySortedList"
      );
    });

    it("should return the min (lowest) value in the list", () => {
      list.add(10);
      list.add(20);
      assert.equal(list.min(), 10);
    });
  });

  describe("#sum()", () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it("should return the sum of all elements in the list", () => {
      list.add(1);
      list.add(2);
      list.add(3);
      assert.equal(list.sum(), 6);
    });

    it("should return 0 for an empty sorted list", () => {
      assert.equal(list.sum(0), 0);
    });
  });

  describe("#avg()", () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it("should return an EmptySortedList exception if there are no elements", () => {
      assert.throws(
        () => {
          list.avg([]);
        },
        Error,
        "EmptySortedList"
      );
    });

    it("should return the average of elements in the list", () => {
      list.add(1);
      list.add(2);
      list.add(3);
      assert.equal(list.avg(), 2);
    });
  });
});
