from typing import cast

class BST:
    def __init__(self, value: int):
        self.value: int = value
        self.left: BST | None = None
        self.right: BST | None = None


def findClosestValueInBst(tree: BST, target: int):
    return findClosestValueInBstHelper(tree, target, float("inf"))

def findClosestValueInBstHelper(tree: BST, target: int, closest: float):
    if tree is None:
        return closest

    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value

    if target < tree.value:
        return findClosestValueInBstHelper(cast(BST, tree.left), target, closest)
    elif target > tree.value:
        return findClosestValueInBstHelper(cast (BST,tree.right), target, closest)
    else:
        return closest

# root: BST = BST(12)
# root.left = BST(1)
# root.right = BST(15)

# print(findClosestValueInBst(root, 14))