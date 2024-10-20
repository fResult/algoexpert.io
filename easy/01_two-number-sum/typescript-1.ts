// O(n log n) time | O(1) space
export function twoNumberSum(array: number[], targetSum: number) {
    const sortedNumbers = sort(array)
    let leftIdx = 0;
    let rightIdx = sortedNumbers.length - 1
    while (leftIdx < rightIdx) {
        const currentSum = sortedNumbers[leftIdx] + sortedNumbers[rightIdx]
        if (currentSum == targetSum)
            return [sortedNumbers[rightIdx], sortedNumbers[leftIdx]]
        else if (currentSum < targetSum) leftIdx += 1
        else if (currentSum > targetSum) rightIdx -= 1
    }
    return [];
}

function sort(arr: number[]): number[] {
    let newArr = arr.slice();
    newArr.sort((a, b) => a - b);
    return newArr;
}
