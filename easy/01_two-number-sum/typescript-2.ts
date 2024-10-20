// O(n) time | O(n) space
export function twoNumberSum(numbers: number[], targetSum: number) {
    const seenNumberSet: Set<Number> = new Set()

    for (const num of numbers) {
        const delta = targetSum - num

        if (seenNumberSet.has(delta)) return [delta, num]
        seenNumberSet.add(num)
    }

    return []
}
