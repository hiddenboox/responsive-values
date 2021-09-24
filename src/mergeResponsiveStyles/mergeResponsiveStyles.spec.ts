import { mergeResponsiveStyles } from "./mergeResponsiveStyles";

describe("mergeResponsiveStyles", () => {
  test("should be able to merge responsive styles", () => {
    const styles = [
      [10, null, 20],
      [null, 30, 40],
    ];
    const expected = [40, 50, 60];

    const result = mergeResponsiveStyles(...styles);

    expect(result).toEqual(expected);
  });
});
