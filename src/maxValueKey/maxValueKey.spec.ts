import { maxValueKey } from "./maxValueKey";

const cases = [
  { input: { a: 1, b: 2, c: -1 }, expected: "b" },
  { input: { bob: 200, john: -400, alice: 600 }, expected: "alice" },
  { input: [{ a: 1, b: 2 }, null, { a: 1, c: 3 }], expected: ["b", "c"] },
  {
    input: [{ a: 1, b: 2 }, { d: 5 }, { a: 1, c: 3, d: 8 }],
    expected: ["b", "d"],
  },
  {
    input: [
      { a: 4, b: 2 },
      { c: 3, a: 5 },
      { a: 1, b: 0 },
    ],
    expected: "a",
  },
];

describe("maxValueKey", () => {
  test.each(cases)("should get max value %o", ({ input, expected }) => {
    expect(maxValueKey(input)).toEqual(expected);
  });
});
