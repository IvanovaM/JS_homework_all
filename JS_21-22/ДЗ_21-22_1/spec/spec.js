var app = require('../js/script.js');

describe("app", function() {
  it("It should call pow", function() {
    var result;

    result = app.pow1(3, 2);

    expect(result).toBe(9);
  });
});

describe("app", function() {
  it("It should call pow", function() {
    var result;

    result = app.pow1(9999, 2);

    expect(result).toBe(99980001);
  });
});

describe("app", function() {
  it("It should call pow", function() {
    var result;

    result = app.pow1(-69, 9);

    expect(result).toBe(-3.5452088*10^16);
  });
});

describe("app", function() {
  it("It should call pow", function() {
    var result;

    result = app.pow1(9, 0);

    expect(result).toBe(1);
  });
});
