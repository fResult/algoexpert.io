# Find Closest Value In BST

**Category:** Binary Search Trees

Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each `BST` node has an integer `value`, a `left` child node, and a `right` child node.\
A node is said to be a valid `BST` node if and only if it satisfies the BST property: its `value` is strictly greater than the values of every node to its left; its `value` is less than or equal to the values of every node to its right; and its children nodes are either valid `BST` nodes themselves or `None` / `null`.

**Sample Input 1:**

```txt
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
target = 12
```

**Sample Output 1:**

```txt
13
```

**Sample Input 2:**

```txt
tree =        100
            /     \
          5       502
        /   \    /    \
      2     15  204  55000
      /        \       /
    1         22    1001
    / \          \      \
  -51  3        57    4500
  /             \
-403            60
target = 100
```

**Sample Output 2:**

```txt
100
```

**Sample Input 3:**

```txt
tree =          100
              /     \
            5       502
          /   \    /    \
        2     15  204  55000
      /        \       /
      1         22    1001
    / \          \      \
  -51  3        57    4500
  /              \
-403             60
target = 208
```

**Sample Output 3:**

```txt
208
```

**Sample Input 4:**

```txt
tree =          100
              /     \
            5       502
          /   \    /    \
        2     15  204  55000
      /        \       /
      1         22    1001
    / \          \      \
  -51  3         57    4500
  /               \
-403              60
target = -70
```

**Sample Output 4:**

```txt
-51
```

**Sample Input 5:**

```txt
tree =          100
              /     \
            5       502
          /   \    /    \
        2     15  204  55000
      /        \       /
      1         22    1001
    / \          \      \
  -51  3         57    4500
  /               \
-403              60
target = 6
```

**Sample Output 5:**

```txt
5
```

**Sample Input 6:**

```txt
tree =          100
              /     \
            5       502
          /   \    /    \
        2     15  204  55000
      /        \       /
      1         22    1001
    / \          \      \
  -51  3         57    4500
  /               \
-403              60
target = -1
```

**Sample Output 6:**

```txt
1
```

**Sample Input 7:**

```txt
tree =          100
              /     \
            5       502
          /   \    /    \
        2     15  204  55000
      /        \       /
      1         22    1001
    / \          \      \
  -51  3         57    4500
   /              \
-403              60
target = 4500
```

**Sample Output 7:**

```txt
29749
```

## Hints

<details>
<summary>Hint 1</summary>

Try traversing the BST node by node, all the while keeping track of the node with the value closest to the target value.\
Calculating the absolute value of the difference between a node's value and the target value should allow you to check if that node is closer than the current closest one.
</details>

<details>
<summary>Hint 2</summary>
Make use of the BST property to determine what side of any given node has values close to the target value and is therefore worth exploring.
</details>

<details>
<summary>Hint 3</summary>
What are the advantages and disadvantages of solving this problem iteratively as opposed to recursively?
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
Average: O(log(n)) time | O(1) space - where n is the number of nodes in the BST Worst: O(n) time | O(1) space - where n is the number of nodes in the BST.
</details>
