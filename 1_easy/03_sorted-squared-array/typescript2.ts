const abs = Math.abs

export function sortedSquaredArray(
    array: number[],
    idx: number = array.length - 1,
    sortedSquares: number[] = Array(array.length).fill(0),
): number[] {
    if (empty(array))
        return sortedSquares

    const smallerValIdx = 0
    const largerValIdx = array.length - 1
    const smallerVal = array[smallerValIdx]
    const largerVal = array[largerValIdx]

    const isAbsSmallerMore = abs(smallerVal) > abs(largerVal)

    sortedSquares[idx] = (isAbsSmallerMore ? smallerVal : largerVal) ** 2

    return sortedSquaredArray(
        isAbsSmallerMore ? array.slice(1) : array.slice(0, array.length - 1),
        --idx,
        sortedSquares,
    )
}

function empty<T>(array: T[]): boolean {
    return array.length === 0
}
