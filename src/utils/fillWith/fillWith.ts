import { range } from "../range";

export const fillWith = (fillValue: any) => (arr: any[], length: number) =>
  arr.concat(range(length - arr.length).fill(fillValue));
