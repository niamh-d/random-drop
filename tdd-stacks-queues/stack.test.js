const { isClass } = require("./utilities");
const Stack = require("../src/stack");

let s;

describe("Stack", () => {
  const SAMPLE_ARR = [1, "apple", "5", 20, null];
  let STARTER_LEN;

  beforeEach(() => {
    s = new Stack();
    SAMPLE_ARR.forEach(el => s.items.push(el));
    STARTER_LEN = s.items.length;
  });

  describe("The Stack class", () => {
    test("should be a class", () => {
      expect(isClass(Stack)).toBe(true);
    });
  });

  describe("The push method", () => {
    test("should add a single element to the top of the stack and stack size should increase by one", () => {
      s.items = new Array();

      for (i = 0; i < SAMPLE_ARR.length; i++) {
        s.push(SAMPLE_ARR[i]);
        expect(s.items.length).toBe(i + 1);
      }
    });
  });

  describe("The pop method", () => {
    test("should remove a single element from the top of the stack and stack size should decrease by one", () => {
      for (i = 0; i < STARTER_LEN; i++) {
        s.pop();
        expect(s.items.length).toBe(STARTER_LEN - (i + 1));
      }
    });
  });

  describe("The isEmpty method", () => {
    test("should return false when stack is not empty", () => {
      expect(s.isEmpty()).toBe(false);
    });

    test("should return true when stack is empty", () => {
      s.items = new Array();
      expect(s.isEmpty()).toBe(true);
    });
  });

  describe("The getSize method", () => {
    test("should return size of stack", () => {
      SAMPLE_ARR.forEach((_, i) => {
        s.items.pop();
        expect(s.getSize()).toBe(STARTER_LEN - (i + 1));
      });
    });
  });
});
