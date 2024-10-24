# Branch Sums

**Category:** Binary Trees

Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch.\
A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each `BinaryTree` node has an integer `value`, a `left` child node, and a `right` child node.\
Children nodes can either be `BinaryTree` nodes themselves or `None` / `null`.

**Sample Input 1:**

```txt
tree =     1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10
```

**Sample Output 1:**

```txt
[15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7
```

**Sample Input 2:**

```txt
tree =          1
```

**Sample Output 2:**

```txt
[1]
```

**Sample Input 3:**

```txt
tree = 1
      /
     2
```

**Sample Output 3:**

```txt
[3]
```

**Sample Input 4:**

```txt
tree =  1
      /   \
     2     3
```

**Sample Output 4:**

```txt
[3, 4]
```

**Sample Input 5:**

```txt
tree = 1
     /   \
    2     3
  /   \
 4     5
```

**Sample Output 5:**

```txt
[7, 8, 4]
```

**Sample Input 6:**

```txt
tree =      1
         /     \
        2       3
      /   \    /  \
     4     5  6    7
   /   \  /
  8    9  10
```

**Sample Output 6:**

```txt
[15, 16, 18, 9, 11, 11, 11]
```

**Sample Input 7:**

```txt
tree = 0
     /
    1
     \
     10
       \
       100
```

**Sample Output 7:**

```txt
[111]
```

**Sample Input 8:**

```txt
tree = 0
         \
          1
           \
           10
            \
            100
```

**Sample Output 8:**

```txt
[111]
```

**Sample Input 9:**

```txt
tree = 0
     /   \
    9     1
        /    \
       15    10
            /   \
          100   200
```

**Sample Output 9:**

```txt
[9, 16, 111, 211]
```

## Hints

<details>
<summary>Hint 1</summary>
Try traversing the Binary Tree in a depth-first-search-like fashion.
</details>

<details>
<summary>Hint 2</summary>
Recursively traverse the Binary Tree in a depth-first-search-like fashion, and pass a running sum of the values of every previously-visited node to each node that you're traversing.
</details>

<details>
<summary>Hint 3</summary>

As you recursively traverse the tree, if you reach a leaf node (a node with no "left" or "right" Binary Tree nodes), add the relevant running sum that you've calculated to a list of sums (which you'll also have to pass to the recursive function).\
If you reach a node that isn't a leaf node, keep recursively traversing its children nodes, passing the correctly updated running sum to them.
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
O(n) time | O(n) space - where n is the number of nodes in the Binary Tree
</details>
