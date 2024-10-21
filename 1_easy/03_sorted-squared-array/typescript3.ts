export function sortedSquaredArray(array: number[]) {
    const abs = Math.abs
    const sortedSquares = Array(array.length).fill(0)
    let smallerValueIdx = 0
    let largerValueIdx = array.length - 1

    for (let idx = sortedSquares.length - 1; idx >= 0; idx--) {
        const smallerValue = array[smallerValueIdx]
        const largerValue = array[largerValueIdx]

        if (abs(smallerValue) > abs(largerValue)) {
            sortedSquares[idx] = smallerValue ** 2
            smallerValueIdx++
        } else {
            sortedSquares[idx] = largerValue ** 2
            largerValueIdx--
        }
    }

    return sortedSquares
}
