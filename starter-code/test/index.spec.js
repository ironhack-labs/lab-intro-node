// Require the file to be tested
const SortedList = require('./../index.js');

// Load the Chai Assertion Library
const assert = require('assert');

describe('SortedList', () => {
  describe('Constructor', () => {
    it('should create an empty SortedList', () => {
      const list = new SortedList();
      assert.equal(list.length, 0);
      assert.equal(list instanceof SortedList, true);
    });
  });

  describe('#add(x)', () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it('should add a single value to SortedList', () => {
      assert.equal(list.length, 0);
      list.add(1);
      assert.equal(list.length, 1);
    });

    it('should add a third value to SortedList', () => {
      list.add(30);
      list.add(20);
      list.add(10);
      assert.equal(list.length, 3);
    });

    it('should add a value while keeping the list sorted', () => {
      list.add(30);
      list.add(20);
      list.add(10);
      assert.equal(list.items[0], 10);
      assert.equal(list.items[1], 20);
      assert.equal(list.items[2], 30);
    });
  });

  describe('#get(i)', () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it('should return an OutOfBounds exception if there is no element in that position', () => {
      let errorObject;
      try {
        list.get(20);
      } catch (error) {
        errorObject = error;
      }
      assert.equal(errorObject instanceof Error, true);
      assert.equal(errorObject.message, 'OutOfBounds');
      assert.throws(list.get, Error, '/OutOfBounds/');
    });

    it('should return the element in that position', () => {
      const foo = 10;
      for (let i = 0; i < 200; i++) {
        list.add(foo * i);
        assert.equal(list.get(i), foo * i);
      }
    });
  });

  describe('#add(x) and get(i)', () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it('should add a second value to SortedList, sorted', () => {
      list.add(20);
      list.add(10);
      assert.equal(list.get(0), 10);
      assert.equal(list.get(1), 20);
    });

    it('should add a third value to SortedList, sorted', () => {
      list.add(30);
      list.add(20);
      list.add(10);
      assert.equal(list.get(0), 10);
      assert.equal(list.get(1), 20);
      assert.equal(list.get(2), 30);
    });
  });

  describe('#max()', () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it('should return an EmptySortedList exception if there is no element in the list', () => {
      try {
        list.max();
        // The next line should not be executed
        assert.equal(true, false);
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, 'EmptySortedList');
      }
    });

    it('should return the max element in the list', () => {
      list.add(10);
      list.add(20);

      assert.equal(list.max(), 20);
    });
  });

  describe('#min()', () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it('should return an EmptySortedList exception if there is no element in the list', () => {
      try {
        list.min();
        // The next line should not be executed
        assert.equal(true, false);
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, 'EmptySortedList');
      }
    });

    it('should return the min element in the list', () => {
      list.add(10);
      list.add(20);

      assert.equal(list.min(), 10);
    });
  });

  describe('#sum()', () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it('should return 0 for an empty sorted list', () => {
      assert.equal(list.sum(), 0);
    });

    it('should add(sum) all elements of the array if there are elements in the list', () => {
      list.add(1);
      list.add(2);
      list.add(3);
      assert.equal(list.sum(), 6);
    });
  });

  describe('#average()', () => {
    let list;
    beforeEach(() => {
      list = new SortedList();
    });

    it('should return an EmptySortedList exception if there are no elements', () => {
      try {
        list.average();
        // The next line should not be executed
        assert.equal(true, false);
      } catch (e) {
        assert.equal(e instanceof Error, true);
        assert.equal(e.message, 'EmptySortedList');
      }
    });

    it('should return the average of elements in the array', () => {
      for (let i = 0; i < 101; i++) {
        list.add(i * 2);
      }
      assert.equal(list.average(), 100);
    });
  });
});
