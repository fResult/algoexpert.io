class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number, closest: number = Infinity): number {
  if (tree === null) return closest
  if (tree.value == target) return target

  closest = Math.abs(target - tree.value) < Math.abs(target - closest) ? tree.value : closest

  return findClosestValueInBst(
    target >= tree.value ? tree.right! : tree.left!,
    target,
    closest,
  )
}
