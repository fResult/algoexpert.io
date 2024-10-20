# Non-Constructible Change

**Category:** Arrays

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create.\
The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given `coins = [1, 2, 5]`, the minimum amount of change that you can't create is `4`.\
If you're given no coins, the minimum amount of change that you can't create is `1`.

**Sample Input 1:**

```txt
coins = [5, 7, 1, 1, 2, 3, 22]
```

**Sample Output 1:**

```txt
20
```

**Sample Input 2:**

```txt
coins = [1, 1, 1, 1, 1]
```

**Sample Output 2:**

```txt
6
```

**Sample Input 3:**

```txt
coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]
```

**Sample Output 3:**

```txt
55
```

**Sample Input 4:**

```txt
coins = [6, 4, 5, 1, 1, 8, 9]
```

**Sample Output 4:**

```txt
3
```

**Sample Input 5:**

```txt
coins = []
```

**Sample Output 5:**

```txt
1
```

**Sample Input 6:**

```txt
coins = [87]
```

**Sample Output 6:**

```txt
1
```

**Sample Input 7:**

```txt
coins = [5, 6, 1, 1, 2, 3, 4, 9]
```

**Sample Output 7:**

```txt
32
```

**Sample Input 8:**

```txt
coins = [1]
```

**Sample Output 8:**

```txt
2
```

**Sample Input 8:**

```txt
coins = [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]
```

**Sample Output 8:**

```txt
87
```

## Hints

<details>
<summary>Hint 1</summary>
One approach to solve this problem is to attempt to create every single amount of change, starting at 1 and going up until you eventually can't create an amount.<br>
While this approach works, there is a better one.
</details>

<details>
<summary>Hint 2</summary>
Start by sorting the input array.<br>
Since you're trying to find the minimum amount of change that you can't create, it makes sense to consider the smallest coins first.
</details>

<details>
<summary>Hint 3</summary>

To understand the trick to this problem, consider the following example: `coins = [1, 2, 4]`.\
With this set of coins, we can create 1, 2, 3, 4, 5, 6, 7 cents worth of change. Now, if we were to add a coin of value 9 to this set, we would not be able to create 8 cents.\
However, if we were to add a coin of value 7, we would be able to create 8 cents, and we would also be able to create all values of change from 1 to 15.\
Why is this the case?
</details>

<details>
<summary>Hint 4</summary>

Create a variable to store the amount of change that you can currently create up to.\
Sort all of your coins, and loop through them in ascending order.\
At every iteration, compare the current coin to the amount of change that you can currently create up to.\
Here are the two scenarios that you'll encounter:

- The coin value is greater than the amount of change that you can currently create plus 1.
- The coin value is smaller than or equal to the amount of change that you can currently create plus 1.

In the first scenario, you simply return the current amount of change that you can create plus 1, because you can't create that amount of change.\
In the second scenario, you add the value of the coin to the amount of change that you can currently create up to, and you continue iterating through the coins.

The reason for this is that, if you're in the second scenario, you can create all of the values of change that you can currently create plus the value of the coin that you just considered.\
If you're given coins `[1, 2]`, then you can make `1, 2, 3` cents.\
So if you add a coin of value `4`, then you can make `4 + 1` cents, `4 + 2` cents, and `4 + 3` cents.\
Thus, you can make up to 7 cents.
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
O(n log n) time | O(1) space - where n is the number of coins
</details>
