# Two Number Sum

**Category:** Arrays

A graph that isn't connected is said to be **disconnected**.

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

**Sample Input 1:**

```txt
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
```

**Sample Output 1:**

```txt
[-1, 11] // the numbers could be in reverse order
```

**Sample Input 2:**

```txt
array = [4, 6]
targetSum = 10
```

**Sample Output 2:**

```txt
[4, 6] // the numbers could be in reverse order
```

**Sample Input 3:**

```txt
array = [4, 6, 1]
targetSum = 5
```

**Sample Output 3:**

```txt
[4, 1] // the numbers could be in reverse order
```

**Sample Input 4:**

```txt
array = [4, 6, 1, -3]
targetSum = 3
```

**Sample Output 4:**

```txt
[6, -3] // the numbers could be in reverse order
```

**Sample Input 5:**

```txt
array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
targetSum = 17
```

**Sample Output 5:**

```txt
[8, 9]
```

**Sample Input 6:**

```txt
array = [15]
targetSum = 15
```

**Sample Output 6:**

```txt
[]
```

**Sample Input 7:**

```txt
array = [14]
targetSum = 15
```

**Sample Output 7:**

```txt
[]
```

**Sample Input 8:**

```txt
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 15
```

**Sample Output 8:**

```txt
[]
```

**Sample Input 9:**

```txt
array = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47]
targetSum = 164
```

**Sample Output 9:**

```txt
[]
```

**Sample Input 10:**

```txt
array = [-7, -5, -3, -1, 0, 1, 3, 5, 7]
targetSum = -5
```

**Sample Output 10:**

```txt
[-5, 0]
```

## Hints

<details>
<summary>Hint 1</summary>
Try using two for loops to sum all possible pairs of numbers in the input array.
What are the time and space implications of this approach?
</details>

<details>
<summary>Hint 2</summary>
Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum.
With two variables in this equation known to you, it shouldn't be hard to solve for Y.
</details>

<details>
<summary>Hint 3</summary>
Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash table.
What are the time and space implications of this approach?
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
O(n) time | O(n) space - where n is the length of the input array
</details>
