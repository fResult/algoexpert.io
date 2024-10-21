# Transpose Matrix

**Category:** Arrays

You're given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.

The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.

You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.

**Sample Input 1:**

```txt
matrix = [
  [1, 2],
]
```

**Sample Output 1:**

```txt
[
  [1],
  [2]
]
```

**Sample Input 2:**

```txt
matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
]
```

**Sample Output 2:**

```txt
[
  [1, 3, 5],
  [2, 4, 6]
]
```

**Sample Input 3:**

```txt
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

**Sample Output 3:**

```txt
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```

**Sample Input 4:**

```txt
matrix = [
  [1, 2, 3]
]
```

**Sample Output 4:**

```txt
[
  [1],
  [2],
  [3]
]
```

**Sample Input 5:**

```txt
matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
```

**Sample Output 5:**

```txt
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

**Sample Input 6:**

```txt
matrix = [
[
  [5, 6, 3, -3, 12],
  [-3, 6, 5, 2, -1],
  [0, 0, 3, 12, 3]
]
```

**Sample Output 6:**

```txt
[
  [5, -3, 0],
  [6, 6, 0],
  [3, 5, 3],
  [-3, 2, 12],
  [12, -1, 3]
]
```

**Sample Input 7:**

```txt
matrix = [
  [1234, 6935, 4205],
  [-23459, 314159, 0],
  [100, 3, 987654]
]
```

**Sample Output 7:**

```txt
[
  [1234, -23459, 100],
  [6935, 314159, 3],
  [4205, 0, 987654]
]
```

## Hints

<details>
<summary>Hint 1</summary>

The row and column indices of each entry in the matrix should be flipped.\
For example, the value at `matrix[1][2]` will be at `matrix[2][1]` in the transpose of the matrix.
</details>

<details>
<summary>Hint 2</summary>

Each column in the matrix should be become a row in the transpose of the matrix.\
Each row in the matrix should become a column in the transpose of the matrix.
</details>

<details>
<summary>Hint 3</summary>
Try iterating one column at a time, and with each column, create a row of the values to add to the transpose of the matrix.
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
O(w * h) time | O(w * h) space - where w is the width of the matrix and h is the height
</details>
