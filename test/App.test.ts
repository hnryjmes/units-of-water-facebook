import calculateUnitsOfWater from "../src/app";

describe("calculateUnitsOfWater", () => {
  expect(calculateUnitsOfWater([2, 1, 2])).toBe(1);
});
