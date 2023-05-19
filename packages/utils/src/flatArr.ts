function flatArray<T>(arr: T[], level: number):T[] {
  return level > 0
    ? arr.reduce((prev: T[], cur) => {
        return prev.concat(Array.isArray(cur) ? flatArray(cur, level - 1) : cur)
      }, [])
    : arr.slice()
}

export default flatArray;