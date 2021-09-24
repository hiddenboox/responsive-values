export const map = (mapper: Function) =>  (...inputs: any) => {
  return inputs.reduce((acc, next) => {
    next.forEach((w, wi) => {
      acc[wi] = acc[wi] ? [].concat(acc[wi], w) : [w]
    })

    return acc
  }, []).map(args => mapper(...args)).reduce((acc, next) => acc.concat(next), [])
}