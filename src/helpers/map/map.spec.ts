import { map } from './map';
import { normalizeInputs } from '../normalizeInputs';

const cases = [
  { input: [[10, null, 20, null], [30, 20, 15, null]], expected: ["b", "c"] },
];

describe('map', () => {
  test.each(cases)('should', ({ input }) => {
    const values = normalizeInputs(...input as any)
    const a = map((a, b) => {
      return a + b
    })(...values as any)
    console.log(a)
  })
})