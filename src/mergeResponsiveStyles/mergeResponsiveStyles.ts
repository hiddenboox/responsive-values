import { map, normalizeInputs } from "../helpers";
import type { StyleValue } from "../types";

const addValues = (a: number, b: number) => a + b;

export const mergeResponsiveStyles = (...styles: StyleValue[]) => {
  const values = normalizeInputs(...styles)

  return map(addValues)(...values);
};
