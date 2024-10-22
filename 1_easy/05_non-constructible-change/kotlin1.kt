// package com.algoexpert.program

tailrec fun nonConstructibleChange(coins: List<Int> = listOf()): Int {
  val sortedCoins = coins.sorted()
  var currentChangeCreated = 0

  for (coin in sortedCoins) {
    if (coin > currentChangeCreated + 1)
      return currentChangeCreated + 1

    currentChangeCreated += coin
  }

  return currentChangeCreated + 1
}
