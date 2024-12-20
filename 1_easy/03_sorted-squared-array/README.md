# Sorted Squared Array

**Category:** Arrays

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

**Sample Input 1:**

```txt
array = [1, 2, 3, 5, 6, 8, 9]
```

**Sample Output 1:**

```txt
[1, 4, 9, 25, 36, 64, 81]
```

**Sample Input 2:**

```txt
array = [1]
```

**Sample Output 2:**

```txt
[1]
```

**Sample Input 3:**

```txt
array = [1, 2]
```

**Sample Output 3:**

```txt
[1, 4]
```

**Sample Input 4:**

```txt
array = [1, 2, 3, 4, 5]
```

**Sample Output 4:**

```txt
[1, 4, 9, 16, 25]
```

**Sample Input 5:**

```txt
array = [-2, -1]
```

**Sample Output 5:**

```txt
[1, 4]
```

**Sample Input 6:**

```txt
array = [-5, -4, -3, -2, -1]
```

**Sample Output 6:**

```txt
[1, 4, 9, 16, 25]
```

**Sample Input 8:**

```txt
array = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
```

**Sample Output 8:**

```txt
[0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
```

**Sample Input 9:**

```txt
array = [-1, -1, 2, 3, 3, 3, 4]
```

**Sample Output 9:**

```txt
[1, 1, 4, 9, 9, 9, 16]
```

**Sample Input 10:**

```txt
array = []
```

**Sample Output 10:**

```txt
[]
```

## Hints

<details>
<summary>Hint 1</summary>
While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well, because of the possible presence of negative numbers.
</details>

<details>
<summary>Hint 2</summary>
Traverse the array value by value, square each value, and insert the squares into an output array.<br>
Then, sort the output array before returning it. Is this the optimal solution?
</details>

<details>
<summary>Hint 3</summary>
To reduce the time complexity of the algorithm mentioned in Hint #2, you need to avoid sorting the ouput array.<br>
To do this, as you square the values of the input array, try to directly insert them into their correct position in the output array.
</details>

<details>
<summary>Hint 4</summary>
Use two pointers to keep track of the smallest and largest values in the input array.<br>
Compare the absolute values of these smallest and largest values, square the larger absolute value, and place the square at the end of the output array, filling it up from right to left.<br>
Move the pointers accordingly, and repeat this process until the output array is filled.
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
O(n) time | O(n) space - where n is the length of the input array
</details>
