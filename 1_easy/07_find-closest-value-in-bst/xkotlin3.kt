import kotlin.math.abs

open class BST(value: Int) {
  var value = value
  var left: BST? = null
  var right: BST? = null
}

fun findClosestValueInBst(tree: BST?, target: Int, closest: Int? = Int.MAX_VALUE): Int {
  if (tree == null) return closest!!
  if (tree.value == target) return target

  var newClosest = if (abs(target - tree.value) < abs(target - closest!!))
    tree.value else closest

  return if (target < tree.value) {
    findClosestValueInBst(tree.left, target, newClosest)
  } else {
    findClosestValueInBst(tree.right, target, newClosest)
  }
}