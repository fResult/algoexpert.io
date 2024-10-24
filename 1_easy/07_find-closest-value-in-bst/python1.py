class BST:
    def __init__(self, value: int):
        self.value: int = value
        self.left: BST | None = None
        self.right: BST | None = None


# Average: O(log n) time | O(log n) space
# Worst: O(n) time | O(n) space
#        Because it can be that every nodes are in the same branch in BST.
#        So, we will never get rid of the branch from the BST.
def findClosestValueInBst(tree: BST | None, target: int) -> int:
    return findClosestValueInBstHelper(tree, target, float("inf"))


def findClosestValueInBstHelper(tree: BST | None, target: int, closest: float) -> int:
    if tree is None:
        return int(closest)

    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value

    if target < tree.value:
        return findClosestValueInBstHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBstHelper(tree.right, target, closest)
    else:
        return int(closest)


# root: BST = BST(12)
# root.left = BST(1)
# root.right = BST(15)

# print(findClosestValueInBst(root, 14))
