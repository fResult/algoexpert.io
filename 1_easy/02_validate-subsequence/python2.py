# O(n) time | O(1) space
def isValidSubsequence(array: list[int], sequence: list[int]) -> bool:
    seqIdx = 0
    for value in array:
        if seqIdx == len(sequence):
            break
        if sequence[seqIdx] == value:
            seqIdx += 1
    return seqIdx == len(sequence)
