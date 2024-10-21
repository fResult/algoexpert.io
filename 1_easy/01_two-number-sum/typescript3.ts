export function twoNumberSum(array: number[], targetSum: number) {
    const seen = new Map<number, true>()
    for (const num of array) {
        const delta = targetSum - num
        if (seen.get(delta))
            return [num, delta]

        seen.set(num, true)
    }

    return []
}