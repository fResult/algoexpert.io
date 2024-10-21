# O(n log n) time | O(1) space
def twoNumberSum(array: list[int], targetSum: int) -> list[int]:
    array.sort()
    leftIdx = 0
    rightIdx = len(array) - 1
    while leftIdx < rightIdx:
        currentSum = array[leftIdx] + array[rightIdx]
        if currentSum == targetSum:
            return [array[leftIdx], array[rightIdx]]
        elif currentSum < targetSum:
            leftIdx += 1
        elif currentSum > targetSum:
            rightIdx -= 1
    return []
