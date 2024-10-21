export function isValidSubsequence(array: number[], sequence: number[]) {
    let idx: number = 0
    array.forEach((num) => num == sequence[idx] && ++idx)
    return idx === sequence.length
}
