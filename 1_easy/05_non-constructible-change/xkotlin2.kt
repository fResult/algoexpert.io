// package com.algoexpert.program

tailrec fun nonConstructibleChange(
  coins: List<Int>,
  currentChangeCreated: Int = 0,
  initialSize: Int = coins.size
): Int {
  if (coins.isEmpty()) return currentChangeCreated + 1

  val sortedCoins = if (coins.size < initialSize) coins else coins.sorted()
  val coin = sortedCoins.first()
  if (coin > currentChangeCreated + 1) return currentChangeCreated + 1

  val addedToCurrentChange = if (coin > currentChangeCreated + 1) 1 else coin

  return nonConstructibleChange(
    sortedCoins.drop(1),
    currentChangeCreated + addedToCurrentChange,
    initialSize,
  )
}
