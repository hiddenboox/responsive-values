import { isNil, fillWith } from "../utils";
import type { ResponsiveStyleValue, StyleValue } from "../types";

const takeFirstDefined = (
  array: ResponsiveStyleValue[],
  idx = 0
): StyleValue | ResponsiveStyleValue =>
  array.slice(idx).find((value) => !isNil(value)) as
    | StyleValue
    | ResponsiveStyleValue;

const padLeftNull = fillWith(null);

export const createResponsiveStyleParser =
  (breakpoints = 5) =>
  (
    ...values: StyleValue[] | ResponsiveStyleValue[]
  ): ResponsiveStyleValue[] => {
    const filledUpValues = padLeftNull(values.flat(), breakpoints);

    const normalizedValues = filledUpValues.map(
      (
        responsiveValue: ResponsiveStyleValue,
        idx: number,
        array: ResponsiveStyleValue[]
      ) => {
        return isNil(responsiveValue)
          ? isNil(takeFirstDefined(array, idx))
            ? takeFirstDefined(array.slice().reverse())
            : takeFirstDefined(array, idx)
          : responsiveValue;
      }
    );

    return normalizedValues;
  };
