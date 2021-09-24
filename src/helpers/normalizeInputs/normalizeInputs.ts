import { normalizeInput } from "..";
import type { StyleValue } from "../../types";
import { sizeOfLargestArray } from "../../utils";

export const normalizeInputs = (...inputs: StyleValue[]) => {
  const breakpoints = sizeOfLargestArray(inputs);

  const parseInput = normalizeInput(breakpoints);

  return inputs.map(parseInput)
}