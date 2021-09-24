import { ResponsiveStyleValue } from "../../types";

export const normalizeOutput = (array: ResponsiveStyleValue[]): ResponsiveStyleValue | ResponsiveStyleValue[] => {
  const lastElement = array[array.length - 1];
  const r = array.reduce<ResponsiveStyleValue[]>((acc, next, idx, arr) => {
    const lastIndexOf = arr.lastIndexOf(next);
    
    if(idx < lastIndexOf) {
      if (next === lastElement) {
        return acc
      }
      return acc.concat(null!)
    }
    return acc.concat(next)
  }, [])

  if (r.length === 1) {
    return r[0]
  }

  return r
}