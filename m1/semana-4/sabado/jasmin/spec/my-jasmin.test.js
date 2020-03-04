describe("sayHi function", () => {
  it("should return Hola", () => {
    expect(sayHi()).toEqual("Hola");
    expect(typeof sayHi()).toEqual("string");
  });
});

describe("Mi calcu", () => {
  it("should return 0 if the array is empty", () => {
    expect(sumArray([])).toEqual(0);
  });

  it("should return the number if the array only has one value", () => {
    expect(sumArray([3])).toEqual(3);
  });
});
