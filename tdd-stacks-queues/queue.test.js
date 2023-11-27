const { isClass } = require("./utilities");
const Queue = require("../src/queue");

let q;

describe("Queue", () => {
  const SAMPLE_ARR = [1, "apple", "5", 20, null];
  let STARTER_LEN;

  beforeEach(() => {
    q = new Queue();
    SAMPLE_ARR.forEach(el => q.items.push(el));
    STARTER_LEN = q.items.length;
  });

  describe("The Queue class", () => {
    test("should be a class", () => {
      expect(isClass(Queue)).toBe(true);
    });
  });

  describe("The enqueue method", () => {
    test("should add items to the BACK of the queue", () => {
      q.items = new Array();
      SAMPLE_ARR.forEach(el => q.enqueue(el));

      expect(q.items.length).toBe(SAMPLE_ARR.length);

      q.items.forEach((el, i) => expect(el).toBe(SAMPLE_ARR[i]));
    });
  });

  describe("The dequeue method", () => {
    test("should remove items from the FRONT of the queue", () => {
      for (i = 0; i < STARTER_LEN; i++) {
        const el = q.dequeue();
        expect(el).toBe(SAMPLE_ARR[i]);
        expect(q.items.length).toBe(STARTER_LEN - (i + 1));
      }
    });
  });

  describe("The peek method", () => {
    test("should return the front element of the queue", () => {
      expect(q.peek()).toBe(SAMPLE_ARR[0]);
    });
  });

  describe("The isEmpty method", () => {
    test("should return false if the queue is not empty", () => {
      expect(q.isEmpty()).toBe(false);
    });

    test("should return true if the queue is empty", () => {
      q.items = new Array();
      expect(q.isEmpty()).toBe(true);
    });
  });

  describe("The size property", () => {
    test("should decrease when items are dequeued", () => {
      for (i = STARTER_LEN; i > 0; i--) {
        q.dequeue();
        expect(q.size).toBe(i - 1);
      }
    });

    test("should increase when items are enqueued", () => {
      q.items = new Array();
      SAMPLE_ARR.forEach((el, i) => {
        q.enqueue(el);
        expect(q.size).toBe(i + 1);
      });
    });

    test("should not go into negative numbers", () => {
      q.items = new Array();
      q.enqueue(SAMPLE_ARR[0]);

      for (i = 0; i < q.items.length + 1; i++) q.dequeue();

      expect(q.size).toBe(0);
    });
  });

  describe("The getSize method", () => {
    test("should return size of queue", () => {
      SAMPLE_ARR.forEach((_, i) => {
        q.items.pop();
        expect(q.getSize()).toBe(STARTER_LEN - (i + 1));
      });
    });
  });
});
