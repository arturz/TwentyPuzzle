export function deepCopy<T>(object: object): T {
  return JSON.parse(JSON.stringify(object));
}