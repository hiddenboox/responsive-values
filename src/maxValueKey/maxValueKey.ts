import { map, normalizeInputs, normalizeOutput } from "../helpers";
import type { ResponsiveStyleValue, StyleValue } from "../types";

type InputObject = {
	[key: string] : number
}

function getMaxValueKey(obj: InputObject): string | undefined {
	return Object.entries(obj).reduce((acc: [undefined | string, number], current) => {
		return current[1] > acc[1]! ? current : acc;
	}, [undefined, Number.MIN_VALUE])[0];
}

export const maxValueKey = (
  ...values: StyleValue[]
): ResponsiveStyleValue | ResponsiveStyleValue[] => {
  const normalizedInputs = normalizeInputs(...values)

  const maxValue = map(getMaxValueKey)(...normalizedInputs)
  return normalizeOutput(maxValue)
};
