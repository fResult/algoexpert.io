export function sortedSquaredArray(array: number[]) {
    return array.map((x) => x * x).sort((a, b) => a - b)
}
