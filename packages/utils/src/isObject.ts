export function isObject(target: unknown): boolean {
  return typeof target === 'object' && target !== null
}
