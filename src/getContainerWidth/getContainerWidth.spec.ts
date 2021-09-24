import { SnappedEdges } from "../types";
import { getContainerWidth } from "./getContainerWidth";

const cases = [
  {
    input: [
      [null, 10, null, 20],
      [true, null, false],
    ],
    expected: [
      "100%",
      "calc(100% - 5px)",
      "calc(100% - 10px)",
      "calc(100% - 10px)",
    ],
  },
  {
    input: [100, [null, true, null, false]],
    expected: ["100%", "100%", "calc(100% - 50px)", "calc(100% - 50px)"],
  },
];

describe("getContainerWidth", () => {
  test.each(cases)(
    "should calculate propriate values %o",
    ({ input: [styles, isSnappedToEdges], expected }) => {
      expect(
        getContainerWidth(styles, isSnappedToEdges as SnappedEdges)
      ).toEqual(expected);
    }
  );
});
