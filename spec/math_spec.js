// tell the spec where to find our code

var math = require('../math');

describe("A simple arithmetic program", function() {
  it("can add two numbers", function() {
    expect(math.add(3, 5)).toBe(8);
  });
});


describe("A simple arithmetic program", function() {
  it("can subtract two numbers", function() {
    expect(math.subtract(5, 3)).toBe(2);
  });
});


describe("A simple arithmetic program", function() {
  it("can multiply two numbers", function() {
    expect(math.multiply(5, 3)).toBe(15);
  });
});


describe("A simple arithmetic program", function() {
  it("can divide two numbers", function() {
    expect(math.divide(10, 2)).toBe(5);
  });
});