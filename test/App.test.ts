import calculateUnitsOfWater from "../src/app";

describe("calculateUnitsOfWater", () => {
  it("should return 1 when given input [2, 1, 2]", () => {
    expect(calculateUnitsOfWater([2, 1, 2])).toBe(1);
  });

  it("should return 8 when given input [3, 0, 1, 3, 0, 5]", () => {
    expect(calculateUnitsOfWater([3, 0, 1, 3, 0, 5])).toBe(8);
  });
});
