// Require the file which will be tested
const SortedList = require('../index.js');
// Load the Assertion Library
const assert = require('assert');

describe('SortedList', () => {
  describe('Constructor', () => {
    it('should have items and length properties', () => {
      const sl = new SortedList();
      assert.equal(sl instanceof SortedList, true);
      assert.equal(sl.length, 0);
      assert(Array.isArray(sl.items))
    });
  });

  describe('#add(x)', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });
    it('should add a single value to SortedList', () => {
      assert.equal(sl.length, 0);
      sl.add(1);
      assert.equal(sl.length, 1);
    });
    it('should add a third value to SortedList', () => {
      sl.add(30);
      sl.add(20);
      sl.add(10);
      assert.equal(sl.items.length, 3);
    });
  });

  describe('#get(i)', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
      for(let i=0; i<3; i++) {
        sl.add(i);
      }
    })
    
    it('should return the element in that position', () => {
      assert.equal(sl.get(2), 2);
    });

    it('should return an OutOfBounds exception if there is no element in that position', () => {
      assert.throws(() => {
        if (sl.get(4) === 'undefined') {
          throw new Error('OutOfBounds');
        }
      }, Error)
    });

   
  });

  describe('#add(x) and get(i)', () =>  {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });
    it('should add a second value to SortedList, sorted',() => {
      sl.add(20);
      sl.add(10);
      assert.equal(sl.get(0), 10);
      assert.equal(sl.get(1), 20);
    });
    it('should add a third value to SortedList, sorted', () => {
      sl.add(30);
      sl.add(20);
      sl.add(10);
      assert.equal(sl.get(0), 10);
      assert.equal(sl.get(1), 20);
      assert.equal(sl.get(2), 30);
    });
  });

  describe('#max()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return the max (highest) value in the array', () => {
      sl.add(10);
      sl.add(20);

      assert.equal(sl.max(), 20);
    });

    it('should return an EmptySortedList exception if there is no elements in the array', () => {
       assert.throws(() => {
        if (sl.max([]) === 'undefined') {
          throw new Error('EmptySortedList');
        }
      }, Error)
    });
  });

  describe('#min()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return the min (lowest) value in the array', () => {
      sl.add(10);
      sl.add(20);
      assert.equal(sl.min(), 10);
    });

    it('should return an EmptySortedList exception if there is no elements in the array', () => {
      assert.throws(() => {
        if (sl.min([]) === 'undefined') {
          throw new Error('EmptySortedList');
        }
      }, Error)
    });
  });

  describe('#sum()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return the sum of all elements in the array', () => {
      sl.add(1);
      sl.add(2);
      sl.add(3);
      assert.equal(sl.sum(), 6);
    });

    it('should return 0 for an empty sorted list', () => {
      assert.equal(sl.sum(0), 0);
    })

  });

  describe('#avg()', () => {
    let sl;
    beforeEach(() => {
      sl = new SortedList();
    });

    it('should return the average of elements in the array', () => {
      sl.add(1)
      sl.add(2)
      sl.add(3)
      assert.equal(sl.avg(), 2);
    })

    it('should return an EmptySortedList exception if there are no elements', () => {
      assert.throws(() => {
        if (sl.avg([]) === 'undefined') {
          throw new Error('EmptySortedList');
        }
      }, Error)
    })

    
  });

  
});
