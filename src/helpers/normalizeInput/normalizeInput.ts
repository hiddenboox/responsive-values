import { createResponsiveStyleParser } from "../..";
import type { StyleValue } from "../../types"

export const normalizeInput = (breakpoints: number) => (input: StyleValue | StyleValue[]) => {
  const parseResponsiveStyle = createResponsiveStyleParser(breakpoints);

  return parseResponsiveStyle(input)
}