# O(n) time | O(n) space
def twoNumberSum(numbers: list[int], targetSum: int) -> list[int]:
    seen: dict[int, int] = {}
    for num in numbers:
        delta = targetSum - num
        if delta in seen:
            return [num, delta]
        seen[num] = True

    return []
