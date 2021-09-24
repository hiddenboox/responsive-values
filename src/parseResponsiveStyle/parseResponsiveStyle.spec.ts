import { createResponsiveStyleParser } from "./parseResponsiveStyle";

const cases = [
  { input: true, expected: [true, true, true, true, true] },
  {
    input: [true, null, null, false],
    expected: [true, false, false, false, false],
  },
  { input: 10, expected: [10, 10, 10, 10, 10] },
  { input: [10, 20, null, null, 40], expected: [10, 20, 40, 40, 40] },
  { input: [null, 10, null, 20, null], expected: [10, 10, 20, 20, 20] },
  { input: "right", expected: ["right", "right", "right", "right", "right"] },
  {
    input: ["left", null, "center"],
    expected: ["left", "center", "center", "center", "center"],
  },
  {
    input: [{ a: 1 }, null, { b: 2 }],
    expected: [{ a: 1 }, { b: 2 }, { b: 2 }, { b: 2 }, { b: 2 }],
  },
];

describe("parseResponsiveStyle", () => {
  test.each(cases)(
    "should parse provided input into normalized values %o",
    ({ input, expected }) => {
      const parseResponsiveStyle = createResponsiveStyleParser(5);
      expect(parseResponsiveStyle(input)).toEqual(expected);
    }
  );
});
