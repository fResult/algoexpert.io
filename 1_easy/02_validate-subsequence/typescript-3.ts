export function isValidSubsequence(array: number[], sequence: number[]) {
    let counter = 0
    for (let i = 0; i < sequence.length; i++) {
        let idx = 0
        for (let j = idx; j < array.length; j++) {
            if (sequence[i] == array[j]) {
                idx = j + 1
                counter++
                break
            }
        }
        if (counter === sequence.length) return true
    }
    return false
}
