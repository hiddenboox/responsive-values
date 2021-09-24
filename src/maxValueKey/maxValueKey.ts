import type { ResponsiveStyleValue, StyleValue } from "../types";

const notUndefined = (value: any) => typeof value !== "undefined";
const notNull = (value: any) => value !== null;

const sortAsc = (styles: StyleValue | ResponsiveStyleValue): StyleValue => {
  return Object.entries(styles).reduce(
    ([minKey, minValue]: [string, number], [key, value]: [string, number]) => {
      return value > minValue ? [key, value] : [minKey, minValue];
    },
    ["", Number.MIN_VALUE]
  )[0];
};

export const maxValueKey = (
  ...values: StyleValue[] | ResponsiveStyleValue[]
): StyleValue | StyleValue[] => {
  const responsiveStyles = values.flat();

  const results: StyleValue[] = responsiveStyles
    .filter(Boolean)
    .map(sortAsc)
    .reduce((acc: StyleValue[], next, _idx, arr) => {
      if (arr.length === 1) {
        return [next];
      }

      return acc
        .concat(next)
        .filter(notUndefined)
        .reduce((acc: any[], next, idx, arr: any[]) => {
          if (arr.find(notNull)!.length !== 1) {
            return acc.concat(next);
          }
          return acc.concat(next !== arr[idx + 1] ? next : null);
        }, []);
    }, []);

  const uniqueResults = [...new Set(results.filter(Boolean))];

  if (uniqueResults.length === 1) {
    return uniqueResults[0];
  }

  return results.filter(Boolean);
};
