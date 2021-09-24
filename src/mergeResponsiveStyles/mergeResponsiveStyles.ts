import { createResponsiveStyleParser } from "../parseResponsiveStyle";
import { range, unary } from "../utils";
import type { StyleValue } from "../types";
import { map, normalizeInputs } from "../helpers";

export const mergeResponsiveStyles = (...styles: number[][]) => {
  const values = normalizeInputs(...styles as any)

  return map((a, b) => a + b)(...values);
};
