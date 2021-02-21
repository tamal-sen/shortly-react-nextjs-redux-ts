export const cloneObjectOrArray = (objectOrArray: unknown | []) => {
  return JSON.parse(JSON.stringify(objectOrArray))
}
