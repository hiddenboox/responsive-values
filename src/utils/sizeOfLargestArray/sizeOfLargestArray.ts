export const sizeOfLargestArray = (arrays: any[]) =>
  arrays
    .map((array: any[]) => array.length)
    .reduce(
      (minValue: number, next: number) => (minValue > next ? minValue : next),
      Number.MIN_VALUE
    );
