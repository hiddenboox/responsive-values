import type { StyleValue } from "../types";
import { map, normalizeInputs } from "../helpers";

const calcaulateValue = (containerMargin: number, isSnappedToEdge: boolean) => {
  if (isSnappedToEdge) {
    return "100%";
  }

  return `calc(100% - ${containerMargin / 2}px)`;
};

export const getContainerWidth = (
  containerMargin: StyleValue,
  isSnappedToEdge: StyleValue,
) => {
  const normalizedInputs = normalizeInputs(containerMargin, isSnappedToEdge)

  return map(calcaulateValue)(...normalizedInputs)
};
