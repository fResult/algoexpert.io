class BinaryTree:
    def __init__(self, value: int):
        self.value: int = value
        self.left: BinaryTree | None = None
        self.right: BinaryTree | None = None


# O(n) time | O(n) space
def branch_sums(root: BinaryTree) -> list[int]:
    sums = []
    calculate_branch_sums(root, 0, sums)
    return sums


# This function contains the side effect
def calculate_branch_sums(
    node: BinaryTree | None, running_sum: int, sums: list[int]
) -> None:
    if node is None:
        return

    new_running_sum = running_sum + node.value

    if node.left is None and node.right is None:
        return sums.append(new_running_sum)

    calculate_branch_sums(node.left, new_running_sum, sums)
    calculate_branch_sums(node.right, new_running_sum, sums)


# root: BinaryTree = BinaryTree(1)
# root.left = BinaryTree(2)
# root.right = BinaryTree(3)
# root.left.left = BinaryTree(4)
# root.left.right = BinaryTree(5)
# root.right.left = BinaryTree(6)
# root.right.right = BinaryTree(7)

# print(branch_sums(root))
