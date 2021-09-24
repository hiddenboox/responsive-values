import type { ResponsiveStyleValue } from "../../types"

export const map = (mapper: Function) =>  (...inputs: ResponsiveStyleValue[][]): ResponsiveStyleValue[] => {
  return inputs.reduce<ResponsiveStyleValue[][]>((acc, next) => {
    next.forEach((w, wi) => {
      acc[wi] = acc[wi] ? acc[wi].concat(w) : [w]
    })

    return acc
  }, []).map(args => mapper(...args)).reduce((acc, next) => acc.concat(next), [])
}